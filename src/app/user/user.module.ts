import { NgModule } from '@angular/core';

import { LoggingInComponent } from './component/logging-in/logging-in.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing-module';
import { UserService } from './service/user.service';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        UserRoutingModule
    ],
    declarations: [
        RegistrationComponent,
        LoggingInComponent
    ],
    providers: [UserService],

})
export class UserModule {}
