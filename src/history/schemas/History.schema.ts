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
export class History {

  @Prop()
  address: string;

  @Prop()
  code: string;

  @Prop()
  chain: Chain;
}

export const HistorySchema = SchemaFactory.createForClass(History);