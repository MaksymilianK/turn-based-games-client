import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GameRoomRoutingModule } from './game-room-routing.module';
import { GameRoomPageComponent } from './component/game-room-page/game-room-page.component';
import { GameRoomService } from './service/game-room.service';
import { GameSelectComponent } from './component/game-select/game-select.component';
import { GameRoomCardComponent } from './component/game-room-card/game-room-card.component';
import { GameRoomCreateComponent } from './component/game-room-create/game-room-create.component';
import { GameModule } from '../game/game.module';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        GameRoomRoutingModule,
        GameModule,
        FormsModule
    ],
    exports: [GameRoomRoutingModule],
    declarations: [
        GameSelectComponent,
        GameRoomPageComponent,
        GameRoomCardComponent,
        GameRoomCreateComponent
    ],
    providers: [GameRoomService]
})
export class GameRoomModule {}
