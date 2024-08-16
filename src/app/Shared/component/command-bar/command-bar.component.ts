import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {
  @Output() actionTriggered= new EventEmitter<any>;

  onAddClick = () => {
    this.actionTriggered.emit('add');
  }

  onDeleteClick = () =>{
    this.actionTriggered.emit('delete');
  }
}
