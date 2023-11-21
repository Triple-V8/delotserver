import { Chain } from '../schemas/code.schema';
export declare class UpdateCodeDto {
    readonly code: string;
    readonly address: string;
    readonly chain: Chain;
}
