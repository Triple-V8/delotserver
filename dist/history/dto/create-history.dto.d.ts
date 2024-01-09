import { Chain } from '../schemas/History.schema';
export declare class CreateHistoryDto {
    readonly address: string;
    readonly code: string;
    readonly chain: Chain;
}
