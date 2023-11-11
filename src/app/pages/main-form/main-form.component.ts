import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {

  constructor(
    private router: Router,
    private applicationService: ApplicationService
  ) {
  }

  submitForm(payload) {
    console.log(payload, ' PAYLOAD')
    this.applicationService.postApplication(payload).subscribe(res => {
      console.log('Post APP on SUCCESS')
    }, () => {
      console.log('Post APP on ERROR')
    })
  }
}
