import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import * as mongoose from 'mongoose';
  import { History } from './schemas/History.schema';
  
  @Injectable()
  export class HistoryService {
    constructor(
      @InjectModel(History.name)
      private HistoryModel: mongoose.Model<History>,
    ) {}
  
    
  
    async create(History: History): Promise<History> {
      const checkHistory = await this.HistoryModel.findOne(History);

      if (checkHistory) {
        throw new BadRequestException('History has been used');
      }
      

      const res = await this.HistoryModel.create(History);

      
      return res;
    }
  
    async findOne(History : string): Promise<History> {
      const Historyx = {
        History : History
      }
      const items = {
        address : 1,
        chain : 1,
        _id : 0
      }
    const item = await this.HistoryModel.findOne(Historyx, items);
    if (!item) {
      throw new NotFoundException('Invalid History');
    }
    return item;
    }

    async findAll(history : string): Promise<History[]> {
      const Historyx = {
        address : history
      }
      const items = {
        address : 1,
        code : 1,
        chain : 1,
        _id : 0
      }
    const item = await this.HistoryModel.find(Historyx, items).exec();
    if (!item  || item.length === 0) {
      throw new NotFoundException('Invalid History');
    }
    return item;
    }

    // async deleteById(id: string): Promise<History> {
    //   return await this.HistoryModel.findByIdAndDelete(id);
    // }
  
    // async updateById(id: string, History: History): Promise<History> {
    //   return await this.HistoryModel.findByIdAndUpdate(id, History, {
    //     new: true,
    //     runValidators: true,
    //   });
    // }
  
    
  }