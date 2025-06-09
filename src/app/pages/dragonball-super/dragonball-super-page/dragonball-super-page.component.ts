import { Component, signal } from '@angular/core';
import { DragonballCharacterListComponent } from '../../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../../interfaces/character.interface';
import { DragonballCharacterAddComponent } from "../../../components/dragonball/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [DragonballCharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})

export class DragonballSuperPageComponent {
  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);

  addCharacter(newCharacter: Character){
    this.characters.update(
      (characters) => [...characters, newCharacter]);
  }
}