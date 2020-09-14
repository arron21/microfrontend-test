import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'air-microfrontend';

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      console.log('listening from the core app');

      console.log(event);
    });
  }
}
