import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent {

  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log(this.form.getRawValue(), ' FORM SUBMITTED');
  }
}
