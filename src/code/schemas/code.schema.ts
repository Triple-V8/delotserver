import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Chain {
  Ethereum = 'ETH',
  Polygon = 'POLY',
  BinanceSmartChain = 'BSC',
  Arbitrum = 'ARB',
  Avalanche = 'AVAX',
  Fantom = 'FANTOM',
  Optimism = 'OP',
  MUMBAI = 'MUMBAI'
}

@Schema({
  timestamps: true,
})
export class Code {
  @Prop()
  code: string;

  @Prop()
  address: string;

  @Prop()
  chain: Chain;
}

export const CodeSchema = SchemaFactory.createForClass(Code);