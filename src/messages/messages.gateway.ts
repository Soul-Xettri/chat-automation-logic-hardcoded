import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Server } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('chat connected');
    });
  }

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messagesService.createMessage(createMessageDto)
    this.server.emit('createMessage', message);
    return message;
  }

  //Botting Message Reply from already save responses

  @SubscribeMessage('bottingMessage')
  async bottingMessage(@MessageBody() createMessageDto: CreateMessageDto) {
    const question = createMessageDto.message;

     // Check if there is a matching question in the QnA table
    const qnaAnswer = await this.messagesService.getQnAAnswer(question)

     // If there is a matching answer, emit it to the client
     if (qnaAnswer) {
      this.server.emit('bottingMessage', { message: qnaAnswer });
      return qnaAnswer;
    }
    // If no matching answer is found, proceed with creating a regular message
    const regularMessage = await this.messagesService.createMessage(createMessageDto);
    this.server.emit('bottingMessage', { message: regularMessage });
    return regularMessage;
  }


  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('join')
  joinRoom() {
    //TODO
  }

  @SubscribeMessage('typing')
  typing() {
    //TODO
  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody() id: number) {
    return this.messagesService.findOne(id);
  }

  @SubscribeMessage('updateMessage')
  update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    return this.messagesService.update(updateMessageDto.id, updateMessageDto);
  }

  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    return this.messagesService.remove(id);
  }
}
