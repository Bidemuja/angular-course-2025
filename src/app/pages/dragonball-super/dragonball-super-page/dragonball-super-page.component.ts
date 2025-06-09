import { Component, inject, signal } from '@angular/core';
import { DragonballCharacterListComponent } from '../../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../../interfaces/character.interface';
import { DragonballCharacterAddComponent } from "../../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [DragonballCharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})

export class DragonballSuperPageComponent {
  /*constructor(
    private dragonballService: DragonballService;
  ){}*/

  public dragonballService = inject(DragonballService);
}