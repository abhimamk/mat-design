import { ProductsComponent } from './products.component';
import { Tablerouting } from './table.routing';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [CommonModule, FormsModule, Tablerouting,MaterialModule]
})
export class TableModule {}
