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
    this.applicationService.getApplications().subscribe((res: any) => {
      this.dataSource = res && res.data ? res.data: [];
    })
  }

  displayedColumns: string[] = ['id', 'name', 'full_name', 'description', 'actions'];
  dataSource = [];

  downloadPDF(id) {
    console.log(id);
    this.tableService.downloadPDF(id).subscribe(res => {
      this.importService.saveFile(`Заявка_${id}`, res, 'pdf');
    });
  }

  editForm(item) {
    const dialogRef = this.dialog.open(DialogEditFormComponent, {
      data: {
        application: item
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.fetchTableData();
      };
    });
  }
}
