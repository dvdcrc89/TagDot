import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { ValidationComponent } from './validation/validation.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      SigninComponent,
      SignupComponent,
      ValidationComponent
    ],
    exports:[
        SigninComponent,
        SignupComponent,
        ValidationComponent
    ],
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule
     
    ],
    providers: [AuthService],
    bootstrap: [AuthModule]
  })
  export class AuthModule { }