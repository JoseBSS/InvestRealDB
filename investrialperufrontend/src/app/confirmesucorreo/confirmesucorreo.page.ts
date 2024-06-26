import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { VariosService } from '../service/varios.service';

@Component({
  selector: 'app-confirmesucorreo',
  templateUrl: './confirmesucorreo.page.html',
  styleUrls: ['./confirmesucorreo.page.scss'],
})
export class ConfirmesucorreoPage implements OnInit {
  codigogenerado;
  OTP: any = {
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
    sixth: ''
  };
  correoaenviar: string;
  jugador_o_soporte: any;
  constructor(
    public varios: VariosService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.GenerarCodigoAleatorioFuncion();
    this.correoaenviar = localStorage.getItem('currentUser');
    this.correoaenviar = 'endesarrollo';
    this.EnviarMailPorCreacionDeTicket();
  }
  GenerarCodigoAleatorioFuncion() {
    this.codigogenerado = Math.floor(Math.random() * 899999 + 100000)
    console.log('this.codigogenerado', this.codigogenerado);
  }
  async EnviarMailPorCreacionDeTicket() {
    var strdedia = new Date();
    var datestring = strdedia.toString();
    console.log('intentando verificar,', this.correoaenviar, 'a las', datestring);
    var databeoboxenviaremailticket = {
      nombre_solicitud: 'controlatuequipoverificarcorreo',
      correoaenviar: this.correoaenviar,
      datestring: datestring,
      codigo_verificacion: this.codigogenerado
    }
    console.log('data a enviar', databeoboxenviaremailticket);
    this.varios.variasfunciones(databeoboxenviaremailticket).subscribe(async (res: any) => {
      console.log('respuesta de beoboxenviaremailticket', res);
    });
  }
  async boton_verifica() {
    this.varios.presentToast('Verificando...');
    console.log('Redirige a ocupaciones deporte y tipo de cuenta');
    if (this.OTP.first + this.OTP.second + this.OTP.third + this.OTP.forth + this.OTP.fifth + this.OTP.sixth == this.codigogenerado) {
      this.jugador_o_soporte = 'el usuario verifico su correo exitosamente';
      var data = {
        email: 'endesarrollo',
        vericode: this.jugador_o_soporte,
        appverification: 3
      };

    }
    else {
      await this.varios.funciondeRETRASAR(3000);
      this.varios.presentToast('Codigo invalido');
    }
  }
  reenviarcorreo() {
    this.varios.presentToast('Correo reenviado!');
    this.ionViewWillEnter();
  }
  otpController(event, next, prev, index) {
    if (index == 6) {
      console.log("submit");
    }
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
  VerificarAutomatico(event) {
    var sexto = event.target.value;
    if (this.OTP.first + this.OTP.second + this.OTP.third + this.OTP.forth + this.OTP.fifth + sexto) {
      this.boton_verifica();
    }
  }
  borrar1(event) {
    this.OTP.first = '';
  }
  borrar2(event) {
    this.OTP.second = '';
  }
  borrar3(event) {
    this.OTP.third = '';
  }
  borrar4(event) {
    this.OTP.forth = '';
  }
  borrar5(event) {
    this.OTP.fifth = '';
  }
  borrar6(event) {
    this.OTP.sixth = '';
  }
}
