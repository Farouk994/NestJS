import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // Service is creating its own dependency
    // Dont do this on a real app
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    this.messagesRepo.findOne(id);
  }

  findAll() {
    this.messagesRepo.findAll();
  }

  create(content: string) {
    this.messagesRepo.create(content);
  }
}
