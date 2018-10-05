import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule,
        MatCheckboxModule } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}
