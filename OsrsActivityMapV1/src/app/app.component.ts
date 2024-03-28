import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'OsrsActivityMap';
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

class item {
  name: string;
  id: number;
  icon: string;

  constructor (name: string, id: number, icon: string) {
    this.name = name;
    this.id = id;
    this.icon = icon;
  }
}

class inventory {
  items: Array<item>;

  constructor () {
    this.items = new Array<item>();
  }

  setItem(slot: number, i: item) {
    this.items[slot] = i;
  }

  getItem(slot: number) {
    return this.items[slot];
  }

  getAs2DArray() {
    let inv: Array<Array<item>>;
    inv = new Array<Array<item>>();

    for (let y = 0; y < 7; y++) {
      let row: Array<item>;
      row = new Array<item>();
      for (let x = 0; x < 4; x++) {
        row[x] = this.getItem(x + 1 + (y * 4));
      }
      inv[y] = row      
    }
    return inv;
  }

}

class equippedGear {
  items: Array<item>;
  headSlot: number;
  capeSlot: number;
  neckSlot: number;
  ammoSlot: number;
  weaponSlot: number;
  shieldSlot: number;
  bodySlot: number;
  legsSlot: number;
  handsSlot: number;
  feetSlot: number;
  ringSlot: number;

  constructor () {
    this.items = new Array<item>();
    this.headSlot = 1;
    this.capeSlot = 2;
    this.neckSlot = 3;
    this.ammoSlot = 4;
    this.weaponSlot = 5;
    this.shieldSlot = 6;
    this.bodySlot = 7;
    this.legsSlot = 8;
    this.handsSlot = 9;
    this.feetSlot = 10;
    this.ringSlot = 11;
  }

  getHelm () {
    return this.items[this.headSlot];
  }
}

class runePouch {
  runes: Array<item>;

  constructor () {
    this.runes = new Array<item>();
  
  }

  setRune(slot: number, rune: item) {
    this.runes[slot] = rune;
  }
}

class spellBook {
  name: string;
  id: number;
  icon: string;

  constructor (name: string, id: number, icon: string) {
    this.name = name;
    this.id  = id;
    this.icon = icon;
  }
}

class gearSetup {
  name: string;
  spellBook: spellBook;
  runepouch: runePouch;
  inventory: inventory;
  gear: equippedGear;

  placeholderItem: item = new item("placeholder",1,"");
  defaultSpellbook: spellBook = new spellBook("standard",1,"");
  defaultRunepouch: runePouch = new runePouch();
  defaultInventory: inventory = new inventory();
  defaultGear: equippedGear = new equippedGear();

  constructor() {
    this.name = "new gear setup";
    this.spellBook = this.defaultSpellbook;
    this.runepouch = this.defaultRunepouch;
    this.inventory = this.defaultInventory;
    this.gear = this.defaultGear;
  }
  
}
