import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['id', 'name', 'text', 'actions'];
  dataSource = [
    {id: 1, name: 'Мусин Ернар', text: 'Текст заявки 1'},
    {id: 2, name: 'Мусин Ернар', text: 'Текст заявки 2'},
    {id: 3, name: 'Мусин Ернар', text: 'Текст заявки 3'},
    {id: 4, name: 'Тест Тест Тестович', text: 'Текст заявки тест'},
  ];
}
