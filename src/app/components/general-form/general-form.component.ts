import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {
  @Input() title = 'Создать заявку'
  @Input() formData;
  @Output() closeDialog = new EventEmitter();
  @Output() emitSubmitForm = new EventEmitter();

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
      full_name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (this.isEdit) {
      this.setFormData();
    }
  }

  setFormData() {
    this.form.patchValue(this.formData);
  }

  submitForm() {
    this.emitSubmitForm.emit(this.form.getRawValue());

    if (this.isEdit) {
      this.closeDialog.emit(true);
    }
  }

  get isEdit() {
    return this.formData && this.formData.id;
  }
}
