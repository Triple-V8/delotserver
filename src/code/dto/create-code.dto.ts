import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Chain } from '../schemas/code.schema';

export class CreateCodeDto {
  @IsNotEmpty()
  @IsString()
  readonly code: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;
  
  @IsNotEmpty()
  @IsEnum(Chain, { message: 'Please enter correct category.' })
  readonly chain: Chain;
}