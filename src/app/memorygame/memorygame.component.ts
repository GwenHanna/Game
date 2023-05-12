import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from "@angular/core";
import randomInt from "../utils/random_int";
import { AVAILABLE_POKEMONS, Pokemon } from "../Avaliable-pokemons";
import shuffle from "../utils/shuffle_array";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-memorygame",
  templateUrl: "./memorygame.component.html",
  styleUrls: ["./memorygame.component.css"],
})
export class MemorygameComponent {
  @ViewChildren("selector") selector!: QueryList<ElementRef>;
  @Input()
  nbdepair = 5;
  pairToDiscover = 0;
  cards: Pokemon[] = [];
  availablePokemon: Pokemon[] = AVAILABLE_POKEMONS;
  previouslySelectedCard: CardComponent[] = [];
  tries: number = 0;
  constructor() {}
  ngOnInit(): void {
    this.pairToDiscover = this.nbdepair;
    for (let i = 0; i < this.nbdepair; i++) {
      let pokemon =
        this.availablePokemon[randomInt(0, this.availablePokemon.length - 1)];
      this.cards.push(pokemon);
      this.cards.push(pokemon);
    }
    shuffle(this.cards);
  }
  ngAfterViewInit(): void {
    const Elems = this.selector.toArray();
  }
  handleChildSelection = (child: CardComponent) => {
    if (this.previouslySelectedCard.length === 0) {
      this.previouslySelectedCard.push(child);
    } else if (
      this.previouslySelectedCard[0].pokemon?.name === child.pokemon?.name
    ) {
      this.pairToDiscover--;
      this.tries++;
      this.previouslySelectedCard = [];
    } else {
      child.selected = false;
      this.previouslySelectedCard[0].selected = false;
      this.previouslySelectedCard = [];
      this.tries++;
    }
  };
}
