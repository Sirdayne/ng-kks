import { ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-form',
  templateUrl: './dialog-edit-form.component.html',
  styleUrls: ['./dialog-edit-form.component.scss']
})
export class DialogEditFormComponent {

  inputSymbol: string;

  constructor(public dialogRef: MatDialogRef<DialogEditFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  closeDialog(value) {
    this.dialogRef.close(value);
  }
}
