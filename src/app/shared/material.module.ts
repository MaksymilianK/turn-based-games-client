import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatGridListModule, MatToolbarModule, MatMenuModule, MatIconModule, MatTabsModule, MatPaginatorModule, MatTableModule, MatStepperModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDividerModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        MatStepperModule
    ]
})
export class MaterialModule {}
