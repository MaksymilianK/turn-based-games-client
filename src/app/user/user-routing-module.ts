import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { LoggingInComponent } from './component/logging-in/logging-in.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
    { path: 'sign-up', component: RegistrationComponent },
    { path: 'sign-in', component: LoggingInComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
