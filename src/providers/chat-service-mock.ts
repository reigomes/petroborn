import {Injectable} from '@angular/core';
import messages from './mock-messages';

@Injectable()
export class ChatService {

  messageCounter: number = 0;
  messages: Array<any> = messages;

  constructor() {
      console.log('mock messages: ', messages);
      console.log(this.messages)
  }

  findById(id) {
    console.log(id)
    return Promise.resolve(this.messages[id - 1]);
  }

  getMessages() {
    return Promise.resolve(this.messages);
  }

  message(message) {
    this.messageCounter = this.messageCounter + 1;
    this.messages.push({id: this.messageCounter, message: message});
    return Promise.resolve();
  }

  delMessage(message) {
    let index = this.messages.indexOf(message);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
    return Promise.resolve();
  }

}
