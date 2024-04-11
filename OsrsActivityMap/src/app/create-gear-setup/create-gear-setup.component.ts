import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import {item, gearSetup} from '../base/items';

@Component({
  selector: 'app-create-gear-setup',
  templateUrl: './create-gear-setup.component.html',
  styleUrl: './create-gear-setup.component.css'
})
export class CreateGearSetupComponent {
  items: any;
  selectedItem: any; 
  gearsetup: gearSetup;

  constructor(private apiService: ApiService) {
    this.gearsetup = new gearSetup();
   }; 

  
  searchItems(name: string) {
    if (name && name.length > 2) {
      this.apiService.findItems(name).subscribe(data => this.items = {
        items: data
      });
    }
  }

  setItem (n: number) {
    console.log(n, this.selectedItem.Name)
    this.gearsetup.inventory.setItem(n, new item(this.selectedItem.Name, this.selectedItem.ID, this.selectedItem.Icon))
  }

  setRune(n: number) {
    this.gearsetup.runepouch.setRune(n, this.selectedItem)
  }

  removeItem(n: number) {
    this.gearsetup.inventory.clearSlot(n);
  }

  removeRune(n: number) {
    this.gearsetup.runepouch.clearSlot(n);
  }

  selectItem (item: any) {
    this.selectedItem = item;
  }

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
