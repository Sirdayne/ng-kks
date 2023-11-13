import { ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'app-dialog-edit-form',
  templateUrl: './dialog-edit-form.component.html',
  styleUrls: ['./dialog-edit-form.component.scss']
})
export class DialogEditFormComponent {

  inputSymbol: string;

  constructor(public dialogRef: MatDialogRef<DialogEditFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private applicationService: ApplicationService) { }

  ngOnInit(): void {
  }

  submitForm(payload) {
    console.log(payload, ' PAYLOAD')
    this.applicationService.editApplication(payload).subscribe(res => {
      console.log('Edit APP on SUCCESS')
    }, () => {
      console.log('Edit APP on ERROR')
    })
  }

  closeDialog(value) {
    this.dialogRef.close(value);
  }
}
