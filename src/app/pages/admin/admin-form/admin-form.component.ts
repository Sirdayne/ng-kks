import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../../../core/services/application.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent {

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
