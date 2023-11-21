import { CodeService } from './code.service';
import { CreateCodeDto } from './dto/create-code.dto';
import { Code } from './schemas/code.schema';
export declare class CodeController {
    private CodeService;
    constructor(CodeService: CodeService);
    createCode(Code: CreateCodeDto): Promise<Code>;
    getCode(code: string): Promise<Code>;
}
