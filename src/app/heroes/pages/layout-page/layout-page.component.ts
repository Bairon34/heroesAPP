import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertService } from '../../components/alerts/alertService.service';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user.interfaace';
import { Router } from '@angular/router';



@Component({
  selector: 'hero-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})


export class LayoutPageComponent {

  constructor(
    private alert:AlertService,
    private authService: AuthService,
    private router : Router
    ){}

  get user():User|undefined{
    return this.authService.currentUser
  }

  public sidebarItems= [
    {label:'Listado',icon:'label',url:'./list'},
    {label:'Añadir',icon:'add',url:'./new-hero'},
    {label:'Buscar',icon:'search',url:'./searchs'},
  ]

  public  logoutApp():void{
   // this.alert.alertAtention("Alert","prueba alert")
   this.authService.logout()
   this.router.navigate(['/auth/login'])
  }
}
