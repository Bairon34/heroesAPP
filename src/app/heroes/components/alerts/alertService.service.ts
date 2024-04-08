import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Swal from "sweetalert2";
import { SearchResponse } from "../../interfaces/popupressponse.interface";

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  public alertAtention(titleAlert:string,textAlert:string){
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
      return result
    });
  }

}
