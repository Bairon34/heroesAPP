import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from '../auth/pages/new-page/new-page.component';
import { SearchsPageComponent } from '../auth/pages/searchs-page/searchs-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'new-hero',
        component:NewPageComponent
      },
      {
        path:'searchs',
        component:SearchsPageComponent
      },
      {
        path:'edit/:id',
        component:NewPageComponent
      },
      {
        path:'list',
        component:ListPageComponent
      },
      {
        path:':id',
        component:HeroPageComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
