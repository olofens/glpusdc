import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const GLPUSDCDecimals = 6;
export const USDCDecimals = 6;
export const GMXDecimals = 18;
export const GLPDecimals = 18;

export function pow(base: BigDecimal, exponent: number): BigDecimal {
  let result = base;

  if (exponent == 0) {
    return BigDecimal.fromString("1");
  }

  for (let i = 2; i <= exponent; i++) {
    result = result.times(base);
  }

  return result;
}

export function toDecimal(value: BigInt, decimals: number): BigDecimal {
  let precision = BigInt.fromI32(10)
    .pow(<u8>decimals)
    .toBigDecimal();

  return value.divDecimal(precision);
}
