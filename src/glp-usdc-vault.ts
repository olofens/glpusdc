import { ERC20 } from "./../generated/GlpUSDCVault/ERC20";
import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import {
  CommitAndClose,
  GlpUSDCVault,
  QueueHedgeRebalanceCall,
} from "../generated/GlpUSDCVault/GlpUSDCVault";

import {
  GLPAddress,
  GlpUSDCVaultAddress,
  sbfGMXAddress,
  USDCAddress,
} from "./constants";
import {
  GLPDecimals,
  GLPUSDCDecimals,
  GMXDecimals,
  pow,
  toDecimal,
  USDCDecimals,
} from "./decimals";
import { loadOrCreateGLPUSDCMetric } from "./glpusdcmetric";

export function handleCommitAndClose(event: CommitAndClose): void {
  const glpUsdcMetric = loadOrCreateGLPUSDCMetric(event.block.timestamp);

  const vault = GlpUSDCVault.bind(Address.fromString(GlpUSDCVaultAddress));
  const USDCContract = ERC20.bind(Address.fromString(USDCAddress));
  const usdcBalance = USDCContract.balanceOf(
    Address.fromString(GlpUSDCVaultAddress)
  );
  glpUsdcMetric.USDCCount = toDecimal(usdcBalance, USDCDecimals);

  const fsGLPContract = ERC20.bind(Address.fromString(GLPAddress));
  const glpBalance = fsGLPContract.balanceOf(
    Address.fromString(GlpUSDCVaultAddress)
  );
  glpUsdcMetric.GLPCount = toDecimal(glpBalance, GLPDecimals);

  const sbfGMXContract = ERC20.bind(Address.fromString(sbfGMXAddress));
  const gmxBalance = sbfGMXContract.balanceOf(
    Address.fromString(GlpUSDCVaultAddress)
  );
  glpUsdcMetric.sbfGMXCount = toDecimal(gmxBalance, GMXDecimals);

  const usdcPerShareBig = vault.convertToAssets(
    BigInt.fromString(
      pow(BigDecimal.fromString("10"), GLPUSDCDecimals).toString()
    )
  );

  const usdcPerShareDecimal = toDecimal(usdcPerShareBig, GLPUSDCDecimals);

  glpUsdcMetric.usdcPerShare = usdcPerShareDecimal;

  const state = vault.strategyState();
  const activeSBTCAlloc = state.value0;
  const activeSETHAlloc = state.value1;
  const activeGLPAlloc = state.value2;
  const activeBTCLeverageIndex = state.value3;
  const activeETHLeverageIndex = state.value4;

  glpUsdcMetric.sBtcAllocInUSDC = toDecimal(activeSBTCAlloc, USDCDecimals);
  glpUsdcMetric.sEthAllocInUSDC = toDecimal(activeSETHAlloc, USDCDecimals);
  glpUsdcMetric.glpAllocInUSDC = toDecimal(activeGLPAlloc, USDCDecimals);
  glpUsdcMetric.btcLeverageIndex = activeBTCLeverageIndex;
  glpUsdcMetric.ethLeverageIndex = activeETHLeverageIndex;

  glpUsdcMetric.glpUSDCSupply = toDecimal(vault.totalSupply(), USDCDecimals);
  glpUsdcMetric.totalAssets = toDecimal(vault.totalAssets(), USDCDecimals);

  glpUsdcMetric.save();
}
