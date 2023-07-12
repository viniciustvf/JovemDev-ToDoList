import { Component, DoCheck } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck{

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
    localStorage.setItem('Tarefas', JSON.stringify(this.taskList));
  }

  public taskList: Array<Task> = JSON.parse(localStorage.getItem('Tarefas') || '[]');

  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm('Tem certeza que deseja excluir tudo ?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTask(event: string) {
    this.taskList.push({ name: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItem(index);
      }
    }
  }
}
