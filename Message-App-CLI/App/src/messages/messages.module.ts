import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
// import { StudentController } from './student.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
  // things that can be used as dependency for classes
})
export class MessagesModule {}
