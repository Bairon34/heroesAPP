import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router} from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero

  constructor(
    private HeroesService: HeroesService,
    private activatedRoute:ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      delay(3000),
      switchMap(({id}) => this.HeroesService.getHeroesByName(id)),
    ).subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes.list'])

      this.hero = hero

      console.log(this.hero)
      return
    })
  }

  public goBack():void{
    this.router.navigateByUrl('heroes/list')
  }

}
