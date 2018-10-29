import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'error', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule {}
