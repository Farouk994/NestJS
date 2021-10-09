import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { StudentController } from './student.controller';

@Module({
  controllers: [MessagesController, StudentController]
})
export class MessagesModule {}
