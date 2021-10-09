import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
// import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // Pass and validate data from a dto to a controller
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

}
bootstrap();

