import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent implements OnInit{

  activities: any;

  constructor(private apiService: ApiService) {
 
   }; 

  ngOnInit(): void {
    this.apiService.getAllActivities().subscribe(data => {
      console.log(data);
      
      this.activities = {
      activities: data
    }})
  }
}
