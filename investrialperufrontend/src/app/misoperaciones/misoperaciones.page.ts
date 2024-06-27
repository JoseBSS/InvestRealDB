import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
 import { VariosService } from '../service/varios.service';
import {Router} from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import {ElementRef, ViewChild} from '@angular/core';
import { IonModal, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AgregarcuentaotarjetaPage } from '../modals/agregarcuentaotarjeta/agregarcuentaotarjeta.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-misoperaciones',
  templateUrl: './misoperaciones.page.html',
  styleUrls: ['./misoperaciones.page.scss'],
})
export class MisoperacionesPage implements OnInit {

  @ViewChild('modal_detalles_completos') modal_detalles: IonModal;


  step: string = 'veroperaciones';
  profileInfo: any;
  operaciones: any;
  dataparaelmodal: any;
  loadingOperations: boolean = true;

  constructor(
    private modalController: ModalController,
    private ElementRef : ElementRef,
    private currencyPipe: CurrencyPipe,
        public varios: VariosService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.varios.ConsultarUsuarioMayorANumero1().subscribe(async( res: any ) =>{
      console.log('res x service en vista', res);
      this.profileInfo=res;
      this.ConsultarOperacionesDeUsuario(res);
    });
  }


  ConsultarOperacionesDeUsuario(resuestadeusuario){
    var datainvestrealperuusuariostraeroperaciones = {
      nombre_solicitud:'investrealperuusuariostraeroperaciones',
      id_user:resuestadeusuario.id
    }
    this.varios.variasfunciones(datainvestrealperuusuariostraeroperaciones).subscribe(async( res: any ) =>{
      console.log('res d investrealperuusuariostraeroperaciones', res);
      this.operaciones=res;
      this.loadingOperations = false;
    });
}


abrir_modal_detalles(dataparaelmodal){
  this.dataparaelmodal=dataparaelmodal;
  console.log('this.dataparaelmodal',this.dataparaelmodal);
  this.modal_detalles.present();

}

cerrar_modal_detalles(){
  this.modal_detalles.dismiss();
}

en_desarrollo(){
  this.varios.presentToast('Función en desarrollo, esta función aun no se ha instalado, (aun no esta disponible se esta desarrollando)')
}

recargaricono(){
  this.varios.presentToast('Actualizando...');
  this.ionViewWillEnter();


}



actualizaroperaciones(event){
  this.varios.presentToast('Actualizando...');
  this.ionViewWillEnter();

  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 3000);


}

async alerta_confirmacion_eliminar_op() {
  const alert = await this.alertController.create({
    header: 'Confirme Cancelación de operación.',
    subHeader: 'Precione SI,CANCELAR para procesar su cancelación.',
    message: 'Esta seguro que desea cancelar esta operación?. Considere contactar con soporte para resoluciones de problemas...',
    buttons: [    {
      text: 'SI,CANCELAR',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.alerta_en_desarrollo();
      },
    },],
  });

  await alert.present();
}

async alerta_en_desarrollo() {
  const alert = await this.alertController.create({
    header: 'Acción en desarrollo',
    subHeader: 'Esta acción se encuenta en desarrollo',
    message: 'Actualmente esta función esta en desarrollo!',
    buttons: ['OK'],
  });

  await alert.present();
}




}