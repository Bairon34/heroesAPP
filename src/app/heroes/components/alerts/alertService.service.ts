import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  public alertAtention(titleAlert:string,textAlert:string): void{
    Swal.fire({
      title: titleAlert,
      text: textAlert,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("click acaeptar");
      }
    });
  }

}
