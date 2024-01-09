import { Chain } from '../schemas/History.schema';
export declare class UpdateHistoryDto {
    readonly address: string;
    readonly code: string;
    readonly chain: Chain;
}
