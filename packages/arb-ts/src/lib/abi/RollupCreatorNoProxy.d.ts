/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface RollupCreatorNoProxyInterface extends ethers.utils.Interface {
  functions: {
    'createRollupNoProxy(bytes32,uint256,uint256,uint256,uint256,address,address,bytes)': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'setTemplates(address,address,address)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'createRollupNoProxy',
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'setTemplates',
    values: [string, string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string]
  ): string

  decodeFunctionResult(
    functionFragment: 'createRollupNoProxy',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setTemplates',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result

  events: {
    'OwnershipTransferred(address,address)': EventFragment
    'RollupCreated(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RollupCreated'): EventFragment
}

export class RollupCreatorNoProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: RollupCreatorNoProxyInterface

  functions: {
    createRollupNoProxy(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'createRollupNoProxy(bytes32,uint256,uint256,uint256,uint256,address,address,bytes)'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>

    setTemplates(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setTemplates(address,address,address)'(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  createRollupNoProxy(
    _machineHash: BytesLike,
    _confirmPeriodBlocks: BigNumberish,
    _extraChallengeTimeBlocks: BigNumberish,
    _arbGasSpeedLimitPerBlock: BigNumberish,
    _baseStake: BigNumberish,
    _stakeToken: string,
    _owner: string,
    _extraConfig: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'createRollupNoProxy(bytes32,uint256,uint256,uint256,uint256,address,address,bytes)'(
    _machineHash: BytesLike,
    _confirmPeriodBlocks: BigNumberish,
    _extraChallengeTimeBlocks: BigNumberish,
    _arbGasSpeedLimitPerBlock: BigNumberish,
    _baseStake: BigNumberish,
    _stakeToken: string,
    _owner: string,
    _extraConfig: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>

  setTemplates(
    _rollupTemplate: string,
    _challengeFactory: string,
    _nodeFactory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setTemplates(address,address,address)'(
    _rollupTemplate: string,
    _challengeFactory: string,
    _nodeFactory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    createRollupNoProxy(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'createRollupNoProxy(bytes32,uint256,uint256,uint256,uint256,address,address,bytes)'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>

    setTemplates(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: CallOverrides
    ): Promise<void>

    'setTemplates(address,address,address)'(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: CallOverrides
    ): Promise<void>

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter

    RollupCreated(rollupAddress: null): EventFilter
  }

  estimateGas: {
    createRollupNoProxy(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'createRollupNoProxy(bytes32,uint256,uint256,uint256,uint256,address,address,bytes)'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>

    setTemplates(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'setTemplates(address,address,address)'(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    createRollupNoProxy(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'createRollupNoProxy(bytes32,uint256,uint256,uint256,uint256,address,address,bytes)'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>

    setTemplates(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setTemplates(address,address,address)'(
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}