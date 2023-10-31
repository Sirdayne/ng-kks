import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MainFormComponent } from './pages/main-form/main-form.component';
import { DownloadComponent } from './pages/download/download.component';

const route: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainFormComponent
      },
      {
        path: 'form',
        component: MainFormComponent
      },
      {
        path: 'download',
        component: DownloadComponent
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
