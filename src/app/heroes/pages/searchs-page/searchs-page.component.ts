import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searchs-page',
  templateUrl: './searchs-page.component.html',
  styleUrls: ['./searchs-page.component.css']
})
export class SearchsPageComponent {

  constructor(private heroesService:HeroesService){}



}
