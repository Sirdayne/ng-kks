import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationService } from "../../core/services/application.service";
import { DialogEditFormComponent } from '../dialog-edit-form/dialog-edit-form.component';
import { RejectApplicationComponent } from '../reject-application/reject-application.component';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.scss']
})
export class ViewApplicationComponent implements OnInit {
  @Input() application;
  @Output() closeDialog = new EventEmitter();

  constructor(
    private applicationService: ApplicationService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  approveApplication(id) {
    this.applicationService.approveApplication(id).subscribe(res => {
      this.closeDialog.emit(true);
    })
  }

  declineApplication() {
    const dialogRef = this.dialog.open(RejectApplicationComponent, {
      data: {
        id: this.application.task.id
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.closeDialog.emit(true);
      };
    });
  }
}
