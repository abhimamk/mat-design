import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { ProductsComponent } from './menu/products/products.component';
import { DataproductsComponent } from './menu/dataproducts/dataproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { Product1Module } from './menu/productresolver/productresv.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UsersModule } from './menu/users/users.module';
import { ProductaddComponent } from './menu/productadd/productadd.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ProductsComponent,
    DataproductsComponent,
    SidebarComponent,
    ProductaddComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    Product1Module,
    UsersModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductaddComponent]
})
export class AppModule { }
