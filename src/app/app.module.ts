import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { StatsService } from './service/stats.service';
import { UserModule } from './user/user.module';
import { GameRoomModule } from './game-room/game-room.module';
import { GameModule } from './game/game.module';

@NgModule({
    imports: [
        CoreModule,
        UserModule,
        GameRoomModule,
        GameModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
      AppComponent,
      HomeComponent,
      ErrorComponent
    ],
    providers: [StatsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
