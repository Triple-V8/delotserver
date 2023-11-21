import * as mongoose from 'mongoose';
import { Code } from './schemas/code.schema';
export declare class CodeService {
    private CodeModel;
    constructor(CodeModel: mongoose.Model<Code>);
    create(Code: Code): Promise<Code>;
    findOne(code: string): Promise<Code>;
}
