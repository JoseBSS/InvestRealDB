import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { VariosService } from '../../service/varios.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonModal, IonRefresher, IonRefresherContent, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef } from "@angular/core";

import { NgZone } from '@angular/core';


@Component({
  selector: 'app-modalcupones',
  templateUrl: './modalcupones.page.html',
  styleUrls: ['./modalcupones.page.scss'],
})
export class ModalcuponesPage implements OnInit {

  rate: ElementRef<any>;
  cuentas_de_usuario: any;
  tarjetas_de_usuario: any;
  cuenta_bancaria_admin: any;
  operacion_enviada_con_foto: any;
  comprainvestrealperu: any;
  ventainvestrealperu: any;
  dolaresarecibir: any;
  solesarecibir: any;
  almacenajetemporal1: any;
  almacenajetemporal2: any;
  almacenajetemporal3: any;
  almacenajetemporal4: any;
  cupon_agregado_en_dolares: string = '0';
  cupon_agregado_en_soles: string = '0';
  vista_en_modal_cupon = 'ver_cupones';
  isModalOpen = false;


  secretKey = "123456&Descryption";
  profileInfo: any = null;
  dolaresaenviar: any = 1000;
  solesaenviar: any = 1000;
  quierecomprardolares: boolean = true;
  step: string = '1';
  banco_que_envia: any = undefined;
  data_de_deposito: any = undefined;
  agrego_algo: any;
  // foto_de_deposito: string = undefined;
  ahora_selecciono_otra_foto: boolean = false;
  imageProfile: any = null;
  new_url_image: any = null;
  credito_usado: string;
  id_credito_usado: any;



  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private decimalPipe: DecimalPipe,
    private modalController: ModalController,
    private ElementRef: ElementRef,
    private currencyPipe: CurrencyPipe,
    public varios: VariosService,
    private router: Router,
    public loadingController: LoadingController,
    public Zone: NgZone,
    private alertController: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.consultarusuario();

  }

  consultarusuario() {
    this.varios.MostrarAlertaMonoOcultarEn8000('present');
    this.varios.ConsultarUsuarioMayorANumero1().subscribe(async (res: any) => {
      console.log('res x service en vista', res);
      this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
      this.profileInfo = res;
    });
  }

  volver_a_cuponnes(){
    this.vista_en_modal_cupon='ingresar_cupon';
  }

  cerrar_modal_creditos() {
    // this.modal_creditos.dismiss();
    this.isModalOpen = false;
    return this.modalCtrl.dismiss(null, 'cancel');

  }
  quitar_credito() {
    this.credito_usado = undefined;
  }


  ingresar_codigo() {
    console.log('ingresar codigo intento');
    this.vista_en_modal_cupon='ver_cupones';

  }

  usar_credito(cadacredito) {


  }


  async abriralertadeagregarcupones() {
    
    // do nothing
    // this.varios.MostrarAlertaMonoOcultarEn80002segundos();
    const alert = await this.alertController.create({
      header: 'Increce el codigo de su cupon:',
      cssClass: 'cerrarsalir-alert',
      inputs: [

        {
          type: 'text',
          placeholder: 'Codigo:',
          name: 'codigoingresadoenalerta',
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button-cancel',
          handler: () => {
            // do nothing
          },
        },
        {
          text: 'Enviar!',
          cssClass: 'alert-button-confirm',
          handler: async (alertData) => {
            console.log('intentando enviar a ', alertData.codigoingresadoenalerta);
            var datainvestrealperuagregarcuponausuario = {
              nombre_solicitud: 'investrealperuagregarcuponausuario',
              codigo_de_cupon: alertData.codigoingresadoenalerta,
              id_usuario: this.profileInfo.id
            }
            this.varios.MostrarAlertaMonoOcultarEn8000('present');
            this.varios.variasfunciones(datainvestrealperuagregarcuponausuario).subscribe(async (res: any) => {
              this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
              if (res && res != null && res > 0) {
                this.varios.presentToast('Cupon Agregado');
                this.consultarusuario();
                alert.dismiss();
              }
              else if (!res || res == null) {
                this.varios.presentToast('Cupon no valido!');

              }

            },
              (error) => {
                console.log('Errores', error)
                this.varios.presentToast('Error al agregar el cupon!');

              }
            );


          },
        },
      ],
    });
    await alert.present();


  }


  usar_cupon(cadacredito) {
    var datainvestrealperuusarcupon = {
      nombre_solicitud: 'investrealperuusarcupon',
      id_cupon: cadacredito.id,
      id_user: this.profileInfo.id
    } 

    this.varios.variasfunciones(datainvestrealperuusarcupon).subscribe(async (res: any) => {
      console.log('res investrealperuusarcupon', res);
      if(res=='puedeaplicar'){
        this.varios.presentToast('Puede Aplicar');
        this.confirm(cadacredito)
      }
      else{
        this.varios.presentToast('Cupon vencido o no puede aplicar');
      }
    });



  }

  confirm(cadacredito) {
    return this.modalCtrl.dismiss(cadacredito, 'confirm');
  }


}
