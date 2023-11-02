import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from './table.service';
import { ImportService } from '../../components/import.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private tableService: TableService,
              private importService: ImportService) {
    this.fetchTableData();
  }

  fetchTableData() {
    this.tableService.getRecords().subscribe(res => {
      console.log(res);
    });
  }

  displayedColumns: string[] = ['id', 'name', 'text', 'actions'];
  dataSource = [
    {id: 1, name: 'Мусин Ернар', text: 'Текст заявки 1'},
    {id: 2, name: 'Мусин Ернар', text: 'Текст заявки 2'},
    {id: 3, name: 'Мусин Ернар', text: 'Текст заявки 3'},
    {id: 4, name: 'Тест Тест Тестович', text: 'Текст заявки тест'},
  ];

  downloadPDF(id) {
    console.log(id);
    this.tableService.downloadPDF(id).subscribe(res => {
      this.importService.saveFile(`Заявка_${id}`, res, 'pdf');
    });
  }
}
