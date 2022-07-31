import { BigInt } from "@graphprotocol/graph-ts"
import {
  GlpUSDCVault,
  Approval,
  CapSet,
  CollectVaultFees,
  CommitAndClose,
  Deposit,
  DepositFeeSet,
  DepositRound,
  InitiateVaultMigration,
  InitiateWithdraw,
  ManagementFeeSet,
  Paused,
  PerformanceFeeSet,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RollToNextPosition,
  TracerClose,
  TracerOpen,
  Transfer,
  Unpaused,
  UpdatePricePerShare,
  Withdraw,
  WithdrawalFeeSet
} from "../generated/GlpUSDCVault/GlpUSDCVault"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.ADMIN_ROLE(...)
  // - contract.DAY(...)
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.GLP_MANAGER(...)
  // - contract.GLP_REWARD_ROUTER(...)
  // - contract.KEEPER_ROLE(...)
  // - contract.MAX_INT(...)
  // - contract.SCALE(...)
  // - contract.TCR(...)
  // - contract.WETH(...)
  // - contract.accountVaultBalance(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.asset(...)
  // - contract.balanceOf(...)
  // - contract.btcLeverageSets(...)
  // - contract.cap(...)
  // - contract.chainlinkOracle(...)
  // - contract.checkpointTotalBalance(...)
  // - contract.commitAndClose(...)
  // - contract.convertToAssets(...)
  // - contract.convertToShares(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.deposit(...)
  // - contract.depositFee(...)
  // - contract.encoder(...)
  // - contract.epochDuration(...)
  // - contract.ethLeverageSets(...)
  // - contract.feeRecipient(...)
  // - contract.getNextLockedQueued(...)
  // - contract.getRoleAdmin(...)
  // - contract.glpCloseSlippage(...)
  // - contract.glpPricing(...)
  // - contract.hasRole(...)
  // - contract.hedgePricing(...)
  // - contract.hedgeStakingActive(...)
  // - contract.increaseAllowance(...)
  // - contract.keeper(...)
  // - contract.lastQueuedWithdrawAmount(...)
  // - contract.lateWithdrawPeriod(...)
  // - contract.lockedInStrategy(...)
  // - contract.managementFee(...)
  // - contract.migrationTimestamp(...)
  // - contract.name(...)
  // - contract.paused(...)
  // - contract.performanceFee(...)
  // - contract.previewDeposit(...)
  // - contract.previewMint(...)
  // - contract.previewWithdraw(...)
  // - contract.pricePerShare(...)
  // - contract.roundPricePerShare(...)
  // - contract.roundQueuedWithdrawalShares(...)
  // - contract.router(...)
  // - contract.shares(...)
  // - contract.shortBurn(...)
  // - contract.shortMint(...)
  // - contract.strategyState(...)
  // - contract.supportsInterface(...)
  // - contract.swapSlippage(...)
  // - contract.symbol(...)
  // - contract.tcrStrategy(...)
  // - contract.totalAssets(...)
  // - contract.totalPending(...)
  // - contract.totalSbtcBalance(...)
  // - contract.totalSethBalance(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.vaultParams(...)
  // - contract.vaultState(...)
  // - contract.whitelistLibrary(...)
  // - contract.withdrawalFee(...)
  // - contract.withdrawals(...)
}

export function handleCapSet(event: CapSet): void {}

export function handleCollectVaultFees(event: CollectVaultFees): void {}

export function handleCommitAndClose(event: CommitAndClose): void {}

export function handleDeposit(event: Deposit): void {}

export function handleDepositFeeSet(event: DepositFeeSet): void {}

export function handleDepositRound(event: DepositRound): void {}

export function handleInitiateVaultMigration(
  event: InitiateVaultMigration
): void {}

export function handleInitiateWithdraw(event: InitiateWithdraw): void {}

export function handleManagementFeeSet(event: ManagementFeeSet): void {}

export function handlePaused(event: Paused): void {}

export function handlePerformanceFeeSet(event: PerformanceFeeSet): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleRollToNextPosition(event: RollToNextPosition): void {}

export function handleTracerClose(event: TracerClose): void {}

export function handleTracerOpen(event: TracerOpen): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleUpdatePricePerShare(event: UpdatePricePerShare): void {}

export function handleWithdraw(event: Withdraw): void {}

export function handleWithdrawalFeeSet(event: WithdrawalFeeSet): void {}
