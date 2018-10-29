import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRoomPageComponent } from './component/game-room-page/game-room-page.component';
import { GameSelectComponent } from './component/game-select/game-select.component';
import { GameRoomCreateComponent } from './component/game-room-create/game-room-create.component';

const routes: Routes = [
    {path: 'game-rooms/create', component: GameRoomCreateComponent},
    {path: 'game-rooms/:game', component: GameRoomPageComponent},
    {path: 'game-rooms', component: GameSelectComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRoomRoutingModule {}
