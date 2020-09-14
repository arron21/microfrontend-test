import { Component, OnInit } from '@angular/core';
import { PostMessageService } from '../post-message.service';

@Component({
  selector: 'app-core-app-store',
  templateUrl: './core-app-store.component.html',
  styleUrls: ['./core-app-store.component.scss'],
})
export class CoreAppStoreComponent implements OnInit {
  store$ = this.pms.store;
  constructor(private pms: PostMessageService) {}

  ngOnInit(): void {}
}
