import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApplicationService } from "../../core/services/application.service";

@Component({
  selector: 'app-reject-application',
  templateUrl: './reject-application.component.html',
  styleUrls: ['./reject-application.component.scss']
})
export class RejectApplicationComponent implements OnInit {
  commentControl = new FormControl('')

  constructor(
    public dialogRef: MatDialogRef<RejectApplicationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private applicationService: ApplicationService
  ) {
  }

  ngOnInit() {
  }

  declineApplication() {
    this.applicationService.declineApplication(this.data.id, this.commentControl.value).subscribe(res => {
      this.dialogRef.close(true);
    })
  }
}
