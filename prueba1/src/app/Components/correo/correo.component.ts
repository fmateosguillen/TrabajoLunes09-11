import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() { 
    this.correo = {
      titulo: "Título del correo",
      cuerpo: `Lorem fistrum no puedor hasta 
      luego Lucas no te digo trigo por no llamarte 
      Rodrigor papaar papaar. Condemor papaar papaar 
      me cago en tus muelas no puedor tiene musho peligro 
      papaar papaar sexuarl. Amatomaa mamaar caballo blanco 
      caballo negroorl`,
      emisor: 'correoEmisor@gmail.com',
      destinatario: 'correoReceptor@gmail.com'
    }
  }

  ngOnInit(): void {

  }

}
