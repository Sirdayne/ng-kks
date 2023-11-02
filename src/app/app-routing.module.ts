import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MainFormComponent } from './pages/main-form/main-form.component';
import { DownloadComponent } from './pages/download/download.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { TableComponent } from './pages/table/table.component';

const route: Routes = [
  {
    path: '',
    component: MainFormComponent
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
        path: '',
        component: GeneralFormComponent
      },
      {
        path: 'form',
        component: GeneralFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
