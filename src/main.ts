import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions:CorsOptions={
    allowedHeaders:[
      'origin',
      'x-requested-with',
      'content-type',
      'accept',
      'authorized'
    ],
    preflightContinue:false,
    optionsSuccessStatus:204,
    credentials:true,
    origin: ['http://localhost:3001', 'http://localhost:3000']
  }
  app.enableCors(corsOptions);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
