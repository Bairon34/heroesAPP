import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
