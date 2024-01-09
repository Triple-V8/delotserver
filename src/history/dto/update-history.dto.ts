import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Chain } from '../schemas/History.schema';

export class UpdateHistoryDto {

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  readonly code: string;

  @IsNotEmpty()
  @IsEnum(Chain, { message: 'Please enter correct category.' })
  readonly chain: Chain;
}