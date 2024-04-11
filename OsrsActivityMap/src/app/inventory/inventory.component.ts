import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import {item, gearSetup} from '../base/items';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  gearsetup: gearSetup;

  constructor(private apiService: ApiService) {
    this.gearsetup = new gearSetup();
   }; 

  counter (i: number) {
    return new Array(i);
  }
   
  ngOnInit() {
    this.gearsetup = new gearSetup();
    this.apiService.getRandomInventory().subscribe(data => {
      console.log(data);
      if (Array.isArray(data)) {
        let dataArray = data as any[];
        for (let index = 0; index < dataArray.length; index++) {
          let i = dataArray[index];
          let itm = new item (i.Name, i.ID, i.Icon);
          this.gearsetup.inventory.setItem(index + 1, itm);
        }
      }
    })
  }
}

