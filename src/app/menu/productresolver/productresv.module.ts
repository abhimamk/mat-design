import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { product1routing } from './productresv.routing';
import { ProductresolverComponent } from './productresolver.component';
import { FilterPipe } from 'src/app/searchCustomFilterpipe/filter.pipe';

@NgModule({
  declarations:[
    ProductresolverComponent,
    FilterPipe,
  ],
  imports:[
    CommonModule,
    product1routing,

  ]
})

export class Product1Module{}
