import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
    ]
  })
  export class MaterialModule { }
