import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CodeController } from './code.controller';
import { CodeService } from './code.service';
import { CodeSchema } from './schemas/code.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Code', schema: CodeSchema }])],
  controllers: [CodeController],
  providers: [CodeService],
})
export class CodeModule {}