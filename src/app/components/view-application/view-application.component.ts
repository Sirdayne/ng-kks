import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationService } from "../../core/services/application.service";

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.scss']
})
export class ViewApplicationComponent implements OnInit {
  @Input() application;
  @Output() closeDialog = new EventEmitter();

  constructor(
    private applicationService: ApplicationService
  ) {
  }

  ngOnInit() {
  }

  approveApplication(id) {
    this.applicationService.approveApplication(id).subscribe(res => {
      this.closeDialog.emit(true);
    })
  }

  declineApplication(id) {
    this.applicationService.declineApplication(id).subscribe(res => {
      this.closeDialog.emit(true);
    })
  }
}
