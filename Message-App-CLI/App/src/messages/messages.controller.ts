import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    // Dont do this on Real App
    // Use Dependency Injection
    this.messagesService = new MessagesService();
  }
  @Get('/students')
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post('/new')
  createMessages(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message: any = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message Not Found');
    }

    return message;
  }
}
