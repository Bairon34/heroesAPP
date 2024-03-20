import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'hero-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems= [
    {label:'Listado',icon:'label',url:'./list'},
    {label:'Añadir',icon:'add',url:'./new-hero'},
    {label:'Buscar',icon:'search',url:'./searchs'},
  ]

  public  logoutApp():void{

    Swal.fire({
      title: "Esta seguro?",
      text: "Quiere salir de la app!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {

      }
    });

  }
}
