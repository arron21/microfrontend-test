import { PostMessageService } from './../post-message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro2',
  templateUrl: './micro2.component.html',
  styleUrls: ['./micro2.component.scss'],
})
export class Micro2Component implements OnInit {
  constructor(private pms: PostMessageService) {}

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      // Normally you would check event.origin
      // To verify the targetOrigin matches
      // this window's domain
      console.log('listening from the core app component micro2');

      console.log(event);

      this.pms.store.next(event.data);
    });
  }
}
