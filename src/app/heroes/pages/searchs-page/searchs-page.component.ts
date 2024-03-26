import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-searchs-page',
  templateUrl: './searchs-page.component.html',
  styleUrls: ['./searchs-page.component.css']
})
export class SearchsPageComponent {

  constructor(private heroesService:HeroesService){}

  public searchsInput = new FormControl()
  public heroes: Hero[] = []
  public selectedHero?: Hero


  serachsHero(): void{
    const value:string =  this.searchsInput.value || '';

    this.heroesService.getSugetions(value)
    .subscribe(heroes => this.heroes = heroes)
  }


  onSelectedOption(event: MatAutocompleteSelectedEvent):void{
    if(!event.option.value){
      this.selectedHero = undefined
      return
    }

    const hero:Hero = event.option.value
    this.searchsInput.setValue(hero.superhero)
    this.selectedHero = hero
  }


}
