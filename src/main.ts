import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

   var corsOptions = {
     origin: ['https://testnet.delots.xyz', 'http://localhost:3000'],
     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
   }

   app.enableCors(corsOptions);

  await app.listen(8001);
}
bootstrap();