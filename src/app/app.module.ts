import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainFormComponent } from './pages/main-form/main-form.component';
import { DownloadComponent } from './pages/download/download.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { TableComponent } from './pages/table/table.component';
import { DialogEditFormComponent } from './components/dialog-edit-form/dialog-edit-form.component';
import { AdminFormComponent } from './pages/admin/admin-form/admin-form.component';
import { ViewApplicationComponent } from "./components/view-application/view-application.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RejectApplicationComponent } from './components/reject-application/reject-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    SidebarComponent,
    NavigationComponent,
    AdminComponent,
    AdminFormComponent,
    MainFormComponent,
    DownloadComponent,
    GeneralFormComponent,
    TableComponent,
    DialogEditFormComponent,
    ViewApplicationComponent,
    RejectApplicationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
