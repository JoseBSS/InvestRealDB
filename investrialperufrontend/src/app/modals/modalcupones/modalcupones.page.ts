import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { VariosService } from '../../service/varios.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonModal, IonRefresher, IonRefresherContent, LoadingController, NavParams } from '@ionic/angular';
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
  dolaresaenviar;
  solesaenviar;

  quierecomprardolares: boolean;
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
  traidopormodalparams: any;
mostrar_cupon_bienvenida: boolean = false;
  configuracionglobal: any;



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
    private modalCtrl: ModalController,
    public navParams: NavParams

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.consultarusuario();
    this.consolederecibidoporpagealmodal();
    this.traerconfiguracionglobal();
  }


  traerconfiguracionglobal(){

    var datainvestrealperutraerglobalconfig = {
      nombre_solicitud: 'investrealperutraerglobalconfig',
    }
    this.varios.MostrarAlertaMonoOcultarEn8000('present');
    this.varios.variasfunciones(datainvestrealperutraerglobalconfig).subscribe(async (res: any) => {
      this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
      this.configuracionglobal=res;
      if(this.configuracionglobal&&this.configuracionglobal[0].valor_config=='si'){
        this.mostrar_cupon_bienvenida=true;
      }
    

    },
      (error) => {
        this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
        console.log('Errores en la configuracion global', error)

      }
    );



  }


  consolederecibidoporpagealmodal() {


    console.log('  dolaresaenviar;', this.dolaresaenviar);
    console.log('  solesaenviar;', this.solesaenviar);
    console.log('  quierecomprardolares: boolean;', this.quierecomprardolares);

  }

  consultarusuario() {
    this.varios.MostrarAlertaMonoOcultarEn8000('present');
    this.varios.ConsultarUsuarioMayorANumero1().subscribe(async (res: any) => {
      console.log('res x service en vista', res);
      this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
      this.profileInfo = res;
    });
  }

  volver_a_cuponnes() {
    this.vista_en_modal_cupon = 'ingresar_cupon';
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
    this.vista_en_modal_cupon = 'ver_cupones';

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
                this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
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
      if (res == 'puedeaplicar') {
        this.varios.presentToast('Puede Aplicar');
        this.confirm(cadacredito)
      }
      else {
        this.varios.presentToast('Cupon vencido o no puede aplicar');
      }
    });



  }


  usar_cupon_bienvenida(){

    var cadacredito = {
      uso_bienvenida: 'si',
      soles_a_sumar_dolares:   this.configuracionglobal[1].valor_config,
      soles_a_sumar_soles: this.configuracionglobal[1].valor_config,
      tipo_de_ganancia: 'ambos'

    }


    if (this.quierecomprardolares === true) {
      return this.modalCtrl.dismiss(cadacredito, 'confirma_que_si');

    }
    if (this.quierecomprardolares === false) {
    }
    return this.modalCtrl.dismiss(cadacredito, 'confirma_que_si');

}


  confirm(cadacredito) {

    if (this.quierecomprardolares === true) {
      console.log('quiere comprar dolares si');
      if(this.solesaenviar>cadacredito.minimo_de_monto_en_soles){
        return this.modalCtrl.dismiss(cadacredito, 'confirma_que_si');
      }
      else{
        this.varios.presentToast('El monto (Soles) a enviar en esta operación es inferior al monto minimo en soles para este cupon')
      }
    }
    if (this.quierecomprardolares === false) {
      console.log('quiere comprar dolares no');
      if(this.dolaresaenviar>cadacredito.minimo_de_monto_dolares){
        return this.modalCtrl.dismiss(cadacredito, 'confirma_que_si');
      }
      else{
        this.varios.presentToast('El monto (Dolares) a enviar en esta operación es inferior al monto minimo en dolares para este cupon')
      }
    }

  }


}
