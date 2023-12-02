import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { chatDto, chatResponseDto } from './dto/chat.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createQnA(dto:chatDto){
    const question = await this.prisma.qnA.create({
        data:{
            question:dto.question,
            answer:dto.answer
        }
    })
    return question
  }

  async getAnswer(dto:chatResponseDto){
     // Split the question into an array of words
    const words = dto.question.split(' ');
    
    // Use the first word as the keyword for the search
    const answer = await this.prisma.qnA.findFirst({
        where:{
            question: {
                startsWith: words[0],
              },
        },
        select:{
            answer:true
        }
    })
    return answer;
  }
}
