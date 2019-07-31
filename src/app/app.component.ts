import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any;

  constructor(private api: ApiService) {
    this.api.getUser().subscribe((data: any) => {
      this.user = data.results[0];
    });
  }

}
