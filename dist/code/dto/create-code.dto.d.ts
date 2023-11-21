import { Chain } from '../schemas/code.schema';
export declare class CreateCodeDto {
    readonly code: string;
    readonly address: string;
    readonly chain: Chain;
}
