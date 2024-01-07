import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

    emitId(id:string):void {
      this.onDeleteCharacter.emit(id);
    }
}
