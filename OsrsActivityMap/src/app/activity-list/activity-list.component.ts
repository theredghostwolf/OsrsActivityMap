import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import {sortableList} from '../base/sortableList';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent implements OnInit{

  activities: sortableList;

  constructor(private apiService: ApiService) {
    this.activities = new sortableList(new Array<any>);
   }; 

  ngOnInit(): void {
    this.apiService.getAllActivities().subscribe(data => {
      this.activities.setList(data as Array<any>);
    })

  }

}
