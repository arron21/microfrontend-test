import { Component, OnInit } from '@angular/core';
import { PostMessageService } from '../post-message.service';

@Component({
  selector: 'app-micro1',
  templateUrl: './micro1.component.html',
  styleUrls: ['./micro1.component.scss'],
})
export class Micro1Component implements OnInit {
  constructor(private pms: PostMessageService) {}

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      // Normally you would check event.origin
      // To verify the targetOrigin matches
      // this window's domain
      console.log('listening from the core app component micro1');

      console.log(event);

      this.pms.store.next(event.data);
    });
  }
}
