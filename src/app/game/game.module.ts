import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';
import { DontGetAngryFormComponent } from './dont-get-angry/component/dont-get-angry-form/dont-get-angry-form.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        DontGetAngryFormComponent
    ],
    exports: [
        GameRoutingModule,
        DontGetAngryFormComponent
    ]
})
export class GameModule {}
