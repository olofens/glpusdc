import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
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

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createCapSetEvent(oldCap: BigInt, newCap: BigInt): CapSet {
  let capSetEvent = changetype<CapSet>(newMockEvent())

  capSetEvent.parameters = new Array()

  capSetEvent.parameters.push(
    new ethereum.EventParam("oldCap", ethereum.Value.fromUnsignedBigInt(oldCap))
  )
  capSetEvent.parameters.push(
    new ethereum.EventParam("newCap", ethereum.Value.fromUnsignedBigInt(newCap))
  )

  return capSetEvent
}

export function createCollectVaultFeesEvent(
  performanceFee: BigInt,
  vaultFee: BigInt,
  round: BigInt,
  feeRecipient: Address
): CollectVaultFees {
  let collectVaultFeesEvent = changetype<CollectVaultFees>(newMockEvent())

  collectVaultFeesEvent.parameters = new Array()

  collectVaultFeesEvent.parameters.push(
    new ethereum.EventParam(
      "performanceFee",
      ethereum.Value.fromUnsignedBigInt(performanceFee)
    )
  )
  collectVaultFeesEvent.parameters.push(
    new ethereum.EventParam(
      "vaultFee",
      ethereum.Value.fromUnsignedBigInt(vaultFee)
    )
  )
  collectVaultFeesEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  collectVaultFeesEvent.parameters.push(
    new ethereum.EventParam(
      "feeRecipient",
      ethereum.Value.fromAddress(feeRecipient)
    )
  )

  return collectVaultFeesEvent
}

export function createCommitAndCloseEvent(
  _round: BigInt,
  _timestamp: BigInt,
  _profitAmount: BigInt,
  _glpAllocation: BigInt,
  _sbtcAllocation: BigInt,
  _sethAllocation: BigInt
): CommitAndClose {
  let commitAndCloseEvent = changetype<CommitAndClose>(newMockEvent())

  commitAndCloseEvent.parameters = new Array()

  commitAndCloseEvent.parameters.push(
    new ethereum.EventParam("_round", ethereum.Value.fromUnsignedBigInt(_round))
  )
  commitAndCloseEvent.parameters.push(
    new ethereum.EventParam(
      "_timestamp",
      ethereum.Value.fromUnsignedBigInt(_timestamp)
    )
  )
  commitAndCloseEvent.parameters.push(
    new ethereum.EventParam(
      "_profitAmount",
      ethereum.Value.fromUnsignedBigInt(_profitAmount)
    )
  )
  commitAndCloseEvent.parameters.push(
    new ethereum.EventParam(
      "_glpAllocation",
      ethereum.Value.fromUnsignedBigInt(_glpAllocation)
    )
  )
  commitAndCloseEvent.parameters.push(
    new ethereum.EventParam(
      "_sbtcAllocation",
      ethereum.Value.fromUnsignedBigInt(_sbtcAllocation)
    )
  )
  commitAndCloseEvent.parameters.push(
    new ethereum.EventParam(
      "_sethAllocation",
      ethereum.Value.fromUnsignedBigInt(_sethAllocation)
    )
  )

  return commitAndCloseEvent
}

export function createDepositEvent(
  caller: Address,
  owner: Address,
  assets: BigInt,
  shares: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )

  return depositEvent
}

export function createDepositFeeSetEvent(
  depositFee: BigInt,
  newDepositFee: BigInt
): DepositFeeSet {
  let depositFeeSetEvent = changetype<DepositFeeSet>(newMockEvent())

  depositFeeSetEvent.parameters = new Array()

  depositFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "depositFee",
      ethereum.Value.fromUnsignedBigInt(depositFee)
    )
  )
  depositFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newDepositFee",
      ethereum.Value.fromUnsignedBigInt(newDepositFee)
    )
  )

  return depositFeeSetEvent
}

export function createDepositRoundEvent(
  account: Address,
  amount: BigInt,
  round: BigInt
): DepositRound {
  let depositRoundEvent = changetype<DepositRound>(newMockEvent())

  depositRoundEvent.parameters = new Array()

  depositRoundEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  depositRoundEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositRoundEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return depositRoundEvent
}

export function createInitiateVaultMigrationEvent(
  _timestamp: BigInt,
  _migrationActiveTimestamp: BigInt
): InitiateVaultMigration {
  let initiateVaultMigrationEvent = changetype<InitiateVaultMigration>(
    newMockEvent()
  )

  initiateVaultMigrationEvent.parameters = new Array()

  initiateVaultMigrationEvent.parameters.push(
    new ethereum.EventParam(
      "_timestamp",
      ethereum.Value.fromUnsignedBigInt(_timestamp)
    )
  )
  initiateVaultMigrationEvent.parameters.push(
    new ethereum.EventParam(
      "_migrationActiveTimestamp",
      ethereum.Value.fromUnsignedBigInt(_migrationActiveTimestamp)
    )
  )

  return initiateVaultMigrationEvent
}

export function createInitiateWithdrawEvent(
  account: Address,
  shares: BigInt,
  round: BigInt
): InitiateWithdraw {
  let initiateWithdrawEvent = changetype<InitiateWithdraw>(newMockEvent())

  initiateWithdrawEvent.parameters = new Array()

  initiateWithdrawEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  initiateWithdrawEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )
  initiateWithdrawEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return initiateWithdrawEvent
}

export function createManagementFeeSetEvent(
  managementFee: BigInt,
  newManagementFee: BigInt
): ManagementFeeSet {
  let managementFeeSetEvent = changetype<ManagementFeeSet>(newMockEvent())

  managementFeeSetEvent.parameters = new Array()

  managementFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "managementFee",
      ethereum.Value.fromUnsignedBigInt(managementFee)
    )
  )
  managementFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newManagementFee",
      ethereum.Value.fromUnsignedBigInt(newManagementFee)
    )
  )

  return managementFeeSetEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPerformanceFeeSetEvent(
  performanceFee: BigInt,
  newPerformanceFee: BigInt
): PerformanceFeeSet {
  let performanceFeeSetEvent = changetype<PerformanceFeeSet>(newMockEvent())

  performanceFeeSetEvent.parameters = new Array()

  performanceFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "performanceFee",
      ethereum.Value.fromUnsignedBigInt(performanceFee)
    )
  )
  performanceFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newPerformanceFee",
      ethereum.Value.fromUnsignedBigInt(newPerformanceFee)
    )
  )

  return performanceFeeSetEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createRollToNextPositionEvent(
  _lockedInStrategy: BigInt,
  _queuedWithdrawAmount: BigInt
): RollToNextPosition {
  let rollToNextPositionEvent = changetype<RollToNextPosition>(newMockEvent())

  rollToNextPositionEvent.parameters = new Array()

  rollToNextPositionEvent.parameters.push(
    new ethereum.EventParam(
      "_lockedInStrategy",
      ethereum.Value.fromUnsignedBigInt(_lockedInStrategy)
    )
  )
  rollToNextPositionEvent.parameters.push(
    new ethereum.EventParam(
      "_queuedWithdrawAmount",
      ethereum.Value.fromUnsignedBigInt(_queuedWithdrawAmount)
    )
  )

  return rollToNextPositionEvent
}

export function createTracerCloseEvent(
  _sbtcAllocation: BigInt,
  _sethAllocation: BigInt
): TracerClose {
  let tracerCloseEvent = changetype<TracerClose>(newMockEvent())

  tracerCloseEvent.parameters = new Array()

  tracerCloseEvent.parameters.push(
    new ethereum.EventParam(
      "_sbtcAllocation",
      ethereum.Value.fromUnsignedBigInt(_sbtcAllocation)
    )
  )
  tracerCloseEvent.parameters.push(
    new ethereum.EventParam(
      "_sethAllocation",
      ethereum.Value.fromUnsignedBigInt(_sethAllocation)
    )
  )

  return tracerCloseEvent
}

export function createTracerOpenEvent(
  _sbtcAllocation: BigInt,
  _sethAllocation: BigInt
): TracerOpen {
  let tracerOpenEvent = changetype<TracerOpen>(newMockEvent())

  tracerOpenEvent.parameters = new Array()

  tracerOpenEvent.parameters.push(
    new ethereum.EventParam(
      "_sbtcAllocation",
      ethereum.Value.fromUnsignedBigInt(_sbtcAllocation)
    )
  )
  tracerOpenEvent.parameters.push(
    new ethereum.EventParam(
      "_sethAllocation",
      ethereum.Value.fromUnsignedBigInt(_sethAllocation)
    )
  )

  return tracerOpenEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpdatePricePerShareEvent(
  _round: BigInt,
  _pricePerShare: BigInt
): UpdatePricePerShare {
  let updatePricePerShareEvent = changetype<UpdatePricePerShare>(newMockEvent())

  updatePricePerShareEvent.parameters = new Array()

  updatePricePerShareEvent.parameters.push(
    new ethereum.EventParam("_round", ethereum.Value.fromUnsignedBigInt(_round))
  )
  updatePricePerShareEvent.parameters.push(
    new ethereum.EventParam(
      "_pricePerShare",
      ethereum.Value.fromUnsignedBigInt(_pricePerShare)
    )
  )

  return updatePricePerShareEvent
}

export function createWithdrawEvent(
  account: Address,
  amount: BigInt,
  shares: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )

  return withdrawEvent
}

export function createWithdrawalFeeSetEvent(
  withdrawalFee: BigInt,
  newWithdrawalFee: BigInt
): WithdrawalFeeSet {
  let withdrawalFeeSetEvent = changetype<WithdrawalFeeSet>(newMockEvent())

  withdrawalFeeSetEvent.parameters = new Array()

  withdrawalFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawalFee",
      ethereum.Value.fromUnsignedBigInt(withdrawalFee)
    )
  )
  withdrawalFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newWithdrawalFee",
      ethereum.Value.fromUnsignedBigInt(newWithdrawalFee)
    )
  )

  return withdrawalFeeSetEvent
}
