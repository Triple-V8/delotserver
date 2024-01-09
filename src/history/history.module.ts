import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoryController } from './History.controller';
import { HistoryService } from './History.service';
import { HistorySchema } from './schemas/History.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'History', schema: HistorySchema }])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}