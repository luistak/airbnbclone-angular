import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PropertyComponent } from './property/property.component';
import { PropertyService } from './../property.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    PropertyService,
    HttpClientModule
  ],
  declarations: [
    HomePageComponent,
    PropertyComponent
  ]
})
export class HomeModule { }
