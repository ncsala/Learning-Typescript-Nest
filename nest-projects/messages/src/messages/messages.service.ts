import { MessagesRepository } from "./messages.repository";

export class MessagesService {
  messagesRepo: MessagesRepository

  constructor() {
    // Service is creating ist own dependencies
    // DONT DO THIS ON REAL APPS!!
    // USE DEPENDENCY INJECTION
    this.messagesRepo = new MessagesRepository()
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id)
  }

  findAll() {
    return this.messagesRepo.findAll()
  }

  createOne(contentent: string) {
    return this.messagesRepo.createOne(contentent)
  }
}