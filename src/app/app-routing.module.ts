import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagContainer } from './container/tag/dot5.container.tag.ts.component';
import { SignupComponent } from './auth/user/signup/signup.component';
import { SigninComponent } from './auth/user/signin/signin.component';
import { ValidationComponent } from './auth/user/validation/validation.component';
import { AuthGuard } from './auth/user/auth-guard.service';



const routes: Routes = [
  { path: 'tag',        component: TagContainer,    canActivate: [AuthGuard]},
  { path: 'signup',     component: SignupComponent},
  { path: '',           component: SigninComponent},
  { path: 'validate',   component: ValidationComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
