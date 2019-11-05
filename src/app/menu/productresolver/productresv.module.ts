import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { product1routing } from './productresv.routing';
import { ProductresolverComponent } from './productresolver.component';
import { FilterPipe } from 'src/app/searchCustomFilterpipe/filter.pipe';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MaterialModule } from 'src/app/material-module';
@NgModule({
  declarations:[
    ProductresolverComponent,
    FilterPipe,
  ],
  imports:[
    CommonModule,
    product1routing,
    NgMatSearchBarModule,
    MaterialModule


  ]
})

export class Product1Module{}
