import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  // messagesService: MessagesService;
  // // Se recibe una copia ya inicializada, se cumple patron
  // // Dependency Injection
  // constructor(messagesService: MessagesService) {
  //   this.messagesService = messagesService;
  // }

  // Todo lo de arriba es equivalente a lo siguiente.
  // Reemplaza la inicializacion de la propiedad y la asignacion
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.createOne(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
