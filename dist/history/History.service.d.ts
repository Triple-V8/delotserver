import * as mongoose from 'mongoose';
import { History } from './schemas/History.schema';
export declare class HistoryService {
    private HistoryModel;
    constructor(HistoryModel: mongoose.Model<History>);
    create(History: History): Promise<History>;
    findOne(History: string): Promise<History>;
    findAll(history: string): Promise<History[]>;
}
