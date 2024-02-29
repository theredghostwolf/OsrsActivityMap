import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OsrsActivityMap';
  message: any; 

  constructor(private apiService: ApiService) { }; 
  ngOnInit() { 
      this.apiService.getMessage().subscribe(data => { 
          console.log(data);
          this.message = data; 
      }); 
  } 
}
