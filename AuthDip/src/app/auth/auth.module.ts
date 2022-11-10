import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

/* const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  }
]; */

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    /* RouterModule.forChild(routes) */
  ],
  exports: [
    LoginPage,
    RegisterPage
  ]
})
export class AuthModule { }
