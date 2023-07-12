import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {

  @Output() public emiteItemTask = new EventEmitter();

  public addItemTask: string = '';

  public submitItemTask(){
    this.addItemTask = this.addItemTask.trim();
    if (this.addItemTask) {
      this.emiteItemTask.emit(this.addItemTask);
      this.addItemTask = '';
    }
  }

}
