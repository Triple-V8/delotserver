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
  import { HistoryService } from './History.service';
  import { CreateHistoryDto } from './dto/create-history.dto';
  import { UpdateHistoryDto } from './dto/update-history.dto';
  import { History } from './schemas/History.schema';
  
  import { Query as ExpressQuery } from 'express-serve-static-core';
  
  @Controller('History')
  export class HistoryController {
    constructor(private HistoryService: HistoryService) {}
  
    @Post()
    async createHistory(
      @Body()
      History: CreateHistoryDto,
    ): Promise<History> {
      return this.HistoryService.create(History);
    }
  
    @Get(':address')
    async getHistory(
      @Param('address')
      address: string,
    ): Promise<History[]> {
      return this.HistoryService.findAll(address);
    }
    
    // @Delete(':Code')
    // async deleteHistory(
    //   @Param('code')
    //   code: string,
    // ): Promise<History> {
    //   return this.HistoryService.deleteById(code);
    // }

    // @Put(':History')s
    // async updateHistory(
    //   @Param('History')
    //   History: string,
    //   @Body()
    //   History: UpdateHistoryDto,
    // ): Promise<History> {
    //   return this.HistoryService.updateByHistory(History, History);
    // }
  
    // @Delete(':History')
    // async deleteHistory(
    //   @Param('History')
    //   History: string,
    // ): Promise<History> {
    //   return this.HistoryService.deleteByHistory(History);
    // }
  }