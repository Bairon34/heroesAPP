import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertService } from '../../components/alerts/alertService.service';



@Component({
  selector: 'hero-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  constructor(private alert:AlertService){}

  public sidebarItems= [
    {label:'Listado',icon:'label',url:'./list'},
    {label:'Añadir',icon:'add',url:'./new-hero'},
    {label:'Buscar',icon:'search',url:'./searchs'},
  ]

  public  logoutApp():void{
    this.alert.alertAtention("Alert","prueba alert")
  }
}
