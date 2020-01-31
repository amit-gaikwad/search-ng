import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  items = [
    { name: "T-Shirts", checked: false },
    { name: "Pants", checked: false },
    { name: "Jacket", checked: true },
    { name: "Mobile", checked: false },
    { name: "Tablet", checked: true },
    { name: "Belt", checked: false },
    { name: "passport", checked: false },
    { name: "sandwich", checked: false }
  ];
  constructor() {}

  getItems(): any {
    return this.items;
  }
  addItem(item: any) {
    this.items.unshift(item);
  }
  setItems(items: any) {
    this.items = items;
  }
}
