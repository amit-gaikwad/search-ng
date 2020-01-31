import { Component, OnInit } from "@angular/core";
import { ItemService } from "../item.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items = [];
  packedItems = [];
  unPackedItems = [];
  newItemName = "";
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = this.itemService.getItems();
    this.packedItems = this.items.filter(item => item.checked);
    this.unPackedItems = this.items.filter(item => !item.checked);
  }

  addItem() {
    const item = {
      name: this.newItemName,
      checked: false
    };
    this.itemService.addItem(item);
    this.newItemName = "";
    this.getItems();
  }

  changeChecked(item) {
    for (const element of this.items) {
      if (element.name == item.name) {
        element.checked = item.checked;
      }
    }
    this.itemService.setItems(this.items);
    this.getItems();
  }
}
