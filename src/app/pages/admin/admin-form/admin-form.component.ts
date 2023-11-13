import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../../../core/services/application.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent {

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private snackBar: MatSnackBar
  ) {
  }

  submitForm(payload) {
    this.applicationService.postApplication(payload).subscribe(res => {
      this.snackBar.open('Успешно создано', 'CLOSE', {
        duration: 3000,
        horizontalPosition: 'center'
      });
    }, () => {
      this.snackBar.open('Успешно создано', 'CLOSE', {
        duration: 3000,
        horizontalPosition: 'center'
      });
    })
  }
}
