import { Component, signal } from '@angular/core';
import { DragonballCharacterListComponent } from '../../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../../interfaces/character.interface';



@Component({
  selector: 'app-dragonball-super-page',
  imports: [DragonballCharacterListComponent],
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

  addCharacter(){
    if (!this.name() || !this.power() || this.power() < 0){return}

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    this.characters.update(
      (characters) => [...characters, newCharacter]);
      this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
