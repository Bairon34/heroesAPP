import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { HeroPageComponent } from './auth/pages/hero-page/hero-page.component';
import { ListPageComponent } from './auth/pages/list-page/list-page.component';
import { NewPageComponent } from './auth/pages/new-page/new-page.component';
import { SearchsPageComponent } from './auth/pages/searchs-page/searchs-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    HeroPageComponent,
    NewPageComponent,
    SearchsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
