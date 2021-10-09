import { IsString } from 'class-validator';

export class CreateMessageDto {
  // This makes sure that the content property is a string
  @IsString()
  content: string;
}
