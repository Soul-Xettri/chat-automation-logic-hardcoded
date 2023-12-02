import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ChatService } from './chat/chat.service';
import { ChatModule } from './chat/chat.module';
import { MessagesModule } from './messages/messages.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    PrismaModule,
    ChatModule,
    MessagesModule,
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ChatService],
})
export class AppModule {}
