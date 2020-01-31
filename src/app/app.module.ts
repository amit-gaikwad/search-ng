import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./items/items.component";
import { ItemComponent } from "./item/item.component";

@NgModule({
  declarations: [AppComponent, ItemsComponent, ItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
