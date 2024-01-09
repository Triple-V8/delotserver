import { HistoryService } from './History.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { History } from './schemas/History.schema';
export declare class HistoryController {
    private HistoryService;
    constructor(HistoryService: HistoryService);
    createHistory(History: CreateHistoryDto): Promise<History>;
    getHistory(address: string): Promise<History[]>;
}
