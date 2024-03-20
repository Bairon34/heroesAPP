import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { SearchsPageComponent } from './pages/searchs-page/searchs-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    CardComponent,
    HeroImagePipe,
    HeroPageComponent,
    SearchsPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
