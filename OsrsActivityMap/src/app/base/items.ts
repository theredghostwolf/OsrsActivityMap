export class item {
    name: string;
    id: number;
    icon: string;
  
    constructor (name: string, id: number, icon: string) {
      this.name = name;
      this.id = id;
      this.icon = icon;
    }
  }
  
  export class inventory {
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

    clearSlot (slot:number) {
      this.items.splice(slot,1);
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
  
  export class equippedGear {
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
  
  export class runePouch {
    runes: Array<item>;
  
    constructor () {
      this.runes = new Array<item>();
    
    }
  
    setRune(slot: number, rune: item) {
      this.runes[slot] = rune;
    }

    clearSlot(slot: number) {
      this.runes.splice(slot, 1);
    }
  }
  
  export class spellBook {
    name: string;
    id: number;
    icon: string;
  
    constructor (name: string, id: number, icon: string) {
      this.name = name;
      this.id  = id;
      this.icon = icon;
    }
  }
  
  export class gearSetup {
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