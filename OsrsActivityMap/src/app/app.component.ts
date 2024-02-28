import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'OsrsActivityMap';
  message: any; 
    constructor(private apiService: ApiService) { }; 
    ngOnInit() { 
        this.apiService.getMessage().subscribe(data => { 
            this.message = data; 
        }); 
    } 
}
