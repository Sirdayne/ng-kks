import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MainFormComponent } from './pages/main-form/main-form.component';
import { DownloadComponent } from './pages/download/download.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { TableComponent } from './pages/table/table.component';
import { AdminFormComponent } from './pages/admin/admin-form/admin-form.component';

const route: Routes = [
  {
    path: '',
    component: MainFormComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminFormComponent
      },
      {
        path: 'form',
        component: AdminFormComponent
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
