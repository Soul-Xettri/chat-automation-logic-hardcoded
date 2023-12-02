import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatService } from './chat.service';
import { chatDto, chatResponseDto } from './dto/chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('qna')
  createQnA(@Body() dto: chatDto) {
    return this.chatService.createQnA(dto);
  }

  @Post('question')
  getAnswer(@Body() dto: chatResponseDto) {
    return this.chatService.getAnswer(dto);
  }
}
