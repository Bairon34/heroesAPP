import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('',{nonNullable:true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:new FormControl(''),
    first_appearance:new FormControl(''),
    characters:new FormControl(''),
    alt_img: new FormControl('')
  })

  public optionCraatorPerson =[{
    id:"DC Comics",
    desc:"DC - comics"
  },
  {
    id:"Marvel Comics",
    desc:"Marvel - comics"
  }]

  constructor(
    private heroesService: HeroesService,
    private activateRoute : ActivatedRoute,
    private router : Router
  ){}

  get currentHero(): Hero{
    const hero =  this.heroForm.value as Hero
    return hero
  }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return

    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroesByName(id))
    ).subscribe( hero => {
      if(!hero){
        return this.router.navigateByUrl('/');
      }
      console.log(hero.alt_img)
      this.heroForm.reset(hero)
      return
    });
  }





  onSubmit():void{
    console.log({
      formIsValid :  this.heroForm.valid,
      value: this.heroForm.value
    })


    if (this.heroForm.invalid) return

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
      .subscribe(hero => {
        //TODO : mostrar snackbar
      });
      return
    }

    this.currentHero.id =this. currentHero.superhero
    this.heroesService.addHero(this.currentHero)
    .subscribe(hero => {
      //TODO : mostrar snacbard y navegar /hero/edit/hero
    });

  }

}
function getRandomInt(arg0: number): string {
  throw new Error('Function not implemented.');
}

