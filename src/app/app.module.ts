import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { StatsService } from './service/stats.service';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [
        CoreModule,
        UserModule,
        AppRoutingModule,
    ],
    declarations: [
      AppComponent,
      HomeComponent,
      PageNotFoundComponent
    ],
    providers: [StatsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
