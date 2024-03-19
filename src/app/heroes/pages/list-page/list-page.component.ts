import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  public heroes:Hero[]=[]

  constructor(private heroServices: HeroesService){}

  ngOnInit(): void {
    this.heroServices.getHeroes()
    .subscribe(heroes =>this.heroes = heroes)
  }
}
