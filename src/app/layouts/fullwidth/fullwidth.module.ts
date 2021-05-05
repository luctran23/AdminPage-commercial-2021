import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../modules/login/login.component';    
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordComponent } from 'src/app/modules/forgot-password/forgot-password.component';
import { SignUpComponent } from 'src/app/modules/sign-up/sign-up.component';
import { EmailVerificationComponent } from 'src/app/modules/email-verification/email-verification.component';
//fire modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    EmailVerificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ]
})
export class FullwidthModule { }
