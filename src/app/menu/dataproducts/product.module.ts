
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { prodcutrouting } from './product.routing';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { DataproductsComponent } from './dataproducts.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import {
  MatToolbarModule,MatDialogModule,
} from '@angular/material';
@NgModule({
  declarations: [
    ProductaddComponent,
    EditproductComponent,
    DataproductsComponent,
    SidebarComponent
  ],
  imports: [CommonModule, prodcutrouting,FormsModule,MatToolbarModule,MatDialogModule,],
  exports: [
    MatToolbarModule,MatDialogModule,],
  entryComponents: [ProductaddComponent,EditproductComponent]
})
export class ProductModule {}
