import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from './table.service';
import { ImportService } from '../../components/import.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditFormComponent } from '../../components/dialog-edit-form/dialog-edit-form.component';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private tableService: TableService,
              private importService: ImportService,
              private dialog: MatDialog,
              private applicationService: ApplicationService) {
    this.fetchTableData();
  }

  fetchTableData() {
    // this.tableService.getRecords().subscribe(res => {
    //   console.log(res);
    // });

    this.applicationService.getApplications().subscribe(res => {
      console.log('applications');
    })
  }

  displayedColumns: string[] = ['id', 'name', 'full_name', 'description', 'actions'];
  dataSource = [
    {id: 1, name: 'Первая заявка', full_name: 'Мусин Ернар', description: 'Текст заявки 1'},
    {id: 2, name: 'Вторая', full_name: 'Мусин Ернар', description: 'Текст заявки 2'},
    {id: 3, name: 'Application N 3', full_name: 'Мусин Ернар', description: 'Текст заявки 3'},
    {id: 4, name: 'Test заявка', full_name: 'Тест Тест Тестович', description: 'Текст заявки тест'},
  ];

  downloadPDF(id) {
    console.log(id);
    this.tableService.downloadPDF(id).subscribe(res => {
      this.importService.saveFile(`Заявка_${id}`, res, 'pdf');
    });
  }

  editForm(item) {
    console.log(item);

    const dialogRef = this.dialog.open(DialogEditFormComponent, {
      data: {
        item
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        console.log('closed re-fetch data')
      };
    });
  }
}
