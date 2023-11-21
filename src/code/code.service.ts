import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import * as mongoose from 'mongoose';
  import { Code } from './schemas/code.schema';
  
  @Injectable()
  export class CodeService {
    constructor(
      @InjectModel(Code.name)
      private CodeModel: mongoose.Model<Code>,
    ) {}
  
    
  
    async create(Code: Code): Promise<Code> {
      const checkCode = await this.CodeModel.findOne(Code);

      if (checkCode) {
        throw new BadRequestException('Code has been used');
      }
      

      const res = await this.CodeModel.create(Code);

      
      return res;
    }
  
    async findOne(code : string): Promise<Code> {
      const codex = {
        code : code
      }
      const items = {
        address : 1,
        chain : 1,
        _id : 0
      }
    const item = await this.CodeModel.findOne(codex, items);
    if (!item) {
      throw new NotFoundException('Invalid code');
    }
    return item;
    }
  
    // async updateById(id: string, Code: Code): Promise<Code> {
    //   return await this.CodeModel.findByIdAndUpdate(id, Code, {
    //     new: true,
    //     runValidators: true,
    //   });
    // }
  
    // async deleteById(id: string): Promise<Code> {
    //   return await this.CodeModel.findByIdAndDelete(id);
    // }
  }