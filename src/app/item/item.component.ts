import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() item = { checked: false };
  @Output() myEventListener = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  onMyChange() {
    this.item.checked = !this.item.checked;
    this.myEventListener.emit(this.item);
  }
}
