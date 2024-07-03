import { User } from 'src/app/auth/interfaces/user.interfaace';
import { Injectable, Pipe } from '@angular/core';
import { Observable, of, tap } from "rxjs";
import Swal from "sweetalert2";
import { PopupResponse } from "../../interfaces/popupressponse.interface";


@Injectable({
  providedIn: 'root'
})

export class AlertService {

  private popupResponse?: PopupResponse

  alertAtention({ titleAlert, textAlert }: { titleAlert: string; textAlert: string; }):Observable<boolean>  {
    return of (false)
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
      return of (result.value)
    });
  }

}
