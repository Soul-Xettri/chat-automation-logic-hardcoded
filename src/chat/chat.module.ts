import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatService } from './chat.service';

@Module({
  controllers: [ChatController],
  providers:[PrismaService,ChatService]
})
export class ChatModule {}
