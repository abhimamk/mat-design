import { DashboardComponent } from './dashboard.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Dashrouting } from './dash.routing';
import { MaterialModule } from 'src/app/material-module';
@NgModule({
  declarations: [
  DashboardComponent
  ],
  imports: [CommonModule,Dashrouting,FormsModule,MaterialModule]
})
export class DashModule {}
