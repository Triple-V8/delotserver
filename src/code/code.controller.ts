import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { CodeService } from './code.service';
  import { CreateCodeDto } from './dto/create-code.dto';
  import { UpdateCodeDto } from './dto/update-code.dto';
  import { Code } from './schemas/code.schema';
  
  import { Query as ExpressQuery } from 'express-serve-static-core';
  
  @Controller('Codes')
  export class CodeController {
    constructor(private CodeService: CodeService) {}
  
    @Post()
    async createCode(
      @Body()
      Code: CreateCodeDto,
    ): Promise<Code> {
      return this.CodeService.create(Code);
    }
  
    @Get(':code')
    async getCode(
      @Param('code')
      code: string,
    ): Promise<Code> {
      return this.CodeService.findOne(code);
    }
  
    // @Put(':code')
    // async updateCode(
    //   @Param('code')
    //   code: string,
    //   @Body()
    //   Code: UpdateCodeDto,
    // ): Promise<Code> {
    //   return this.CodeService.updateBycode(code, Code);
    // }
  
    // @Delete(':code')
    // async deleteCode(
    //   @Param('code')
    //   code: string,
    // ): Promise<Code> {
    //   return this.CodeService.deleteBycode(code);
    // }
  }