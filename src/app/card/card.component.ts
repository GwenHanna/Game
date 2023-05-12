import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pokemon } from "../Avaliable-pokemons";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input()
  id: number = 1;
  @Input()
  pokemon?: Pokemon;
  selected: boolean = false;
  @Output() selectedCard = new EventEmitter<this>();
  constructor() {}
  setSelected(bool: boolean) {
    if (!this.selected === bool) {
      this.selected = bool;
      this.selectedCard.emit(this);
    }
  }
}
