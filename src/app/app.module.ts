import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MemorygameComponent } from "./memorygame/memorygame.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [AppComponent, MemorygameComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
