import { NgModule } from '@angular/core';

import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CurrentUserService } from './service/current-user.service';
import { WebSocketService } from './service/web-socket.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        HttpClientModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        HttpClientModule,
        SharedModule
    ],
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    providers: [
        WebSocketService
    ]
})
export class CoreModule {}
