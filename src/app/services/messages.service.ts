import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getMessages(){
    return ['hi', 'hello', 'namaste'];
  }
}
