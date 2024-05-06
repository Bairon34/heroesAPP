import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { AlertService } from '../../components/alerts/alertService.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

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
    private router : Router,
    private snackbar: MatSnackBar,
    private dialog : MatDialog
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
      this.eiditSuperHero()
      return
    }

    this.addSuperHero()
  }

  showSnackbar(message:string):void{
    this.snackbar.open(message,'done',{
      duration :2500,

    })
  }

  addSuperHero(){
    this.currentHero.id =this. currentHero.superhero
    this.heroesService.addHero(this.currentHero)
    .subscribe(hero => {
      this.router.navigate(['/heroes/edit', hero.id])
      this.showSnackbar(`${hero.superhero} registered!`)
    });

  }

  eiditSuperHero(){
    this.heroesService.updateHero(this.currentHero)
      .subscribe(hero => {
        this.showSnackbar(`${hero.superhero} update!`)
      });
  }

  onDeleteHero(){

    if(!this.currentHero.id) throw Error('Hero id is required')

    const dialogRef =  this.dialog.open(ConfirmDialogComponent,{
      data: this.heroForm.value
    })

    dialogRef.afterClosed()
    .pipe(
      filter( (result : boolean) => result),
      switchMap(() => this.heroesService.deleteHero(this.currentHero.id)),
      filter( (wasDelete : boolean) => wasDelete)
    )
    .subscribe( () => {
      this.router.navigate(['/heroes'])
      return
    })
  }
}



