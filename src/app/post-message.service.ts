import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostMessageService {
  store = new BehaviorSubject({});
  constructor() {
    window.addEventListener('message', (event) => {
      console.log('listening from the core app');

      console.log(event);
    });
  }
}
