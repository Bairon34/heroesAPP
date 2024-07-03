import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanMatch } from '@angular/router';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { Error404PageComponent } from './shared/page/error404-page/error404-page.component';
import { AuthGuard } from './auth/guard/auth.guard';


const routes: Routes = [
  {
    path:'auth',
    loadChildren:() =>import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'heroes',
    loadChildren:() =>import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path:'404',
    component: Error404PageComponent
  },
  {
    path:'',
    redirectTo:'heroes',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
