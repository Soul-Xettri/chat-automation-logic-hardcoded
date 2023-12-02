import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private prisma:PrismaService){}

  async createMessage(dto: CreateMessageDto) {
    const message = await this.prisma.message.create({
      data:{
        message : dto.message
      }
    })
    return message
  }

  async getQnAAnswer(question:string){
    // Split the question into an array of words
   const words = question.split(' ');
   
   // Use the first word as the keyword for the search
   const answer = await this.prisma.qnA.findFirstOrThrow({
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

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
