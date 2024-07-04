import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { VariosService } from '../service/varios.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonModal, IonRefresher, IonRefresherContent, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AgregarcuentaotarjetaPage } from '../modals/agregarcuentaotarjeta/agregarcuentaotarjeta.page';
import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef } from "@angular/core";

import { NgZone } from '@angular/core';
import { ModalcuponesPage } from '../modals/modalcupones/modalcupones.page';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.page.html',
  styleUrls: ['./operacion.page.scss'],
})
export class OperacionPage implements OnInit {

  sort = 'assets/investrealperurecursos/customsvg/change.svg';
  // @ViewChild('contenedor1') contenedor1: IonRefresher;
  // @ViewChild('contenedor2') contenedor2: IonRefresherContent;


  @ViewChild('modalpaso2') modalpaso2: IonModal;
  @ViewChild('modalpaso3') modalpaso3: IonModal;
  @ViewChild('campodolaresarecibir') campodolaresarecibir!: ElementRef;
  @ViewChild('camposolesaenviar') camposolesaenviar!: ElementRef;
  @ViewChild('campodolaresaenviar') campodolaresaenviar!: ElementRef;
  @ViewChild('camposolesarecibir') camposolesarecibir!: ElementRef;
  @ViewChild('modal_creditos') modal_creditos: IonModal;

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

  vista_en_modal_cupon = 'ver_cupones';
  isModalOpen = false;
  cupongenerado: any;

  // @ViewChild('rate') myElement: ElementRef;
  @ViewChild('rate') set content(content: ElementRef) {
    if (!this.quierecomprardolares) { // initially setter gets called with undefined
      this.rate = content;
    }
    else {
      this.rate = content;
    }
  }

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
    this.TraerCompraYVentaInvestrealPeru();

    this.varios.ConsultarUsuarioMayorANumero1().subscribe(async (res: any) => {
      console.log('res x service en vista', res);
      this.profileInfo = res;
      this.traercuentasytarjetasdeusuario();
    });
  }

  handleRefresh(event) {
    console.log(event);
    event.target.complete();
    this.traercuentasytarjetasdeusuario();
  }

  TraerCompraYVentaInvestrealPeru() {
    var datainvestrealperutraertipodecambio = {
      nombre_solicitud: 'investrealperutraertipodecambio',
    }
    this.varios.variasfunciones(datainvestrealperutraertipodecambio).subscribe(async (res: any) => {
      console.log(' respuesta investrealperutraertipodecambio', res);
      this.comprainvestrealperu = res[0];
      this.ventainvestrealperu = res[1];


      var temporal1 = (((this.ventainvestrealperu) * 1000) / (2)).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
      var temporal2 = (this.solesaenviar / this.ventainvestrealperu).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
      var temporal3 = (this.solesaenviar / this.ventainvestrealperu).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
      var temporal4 = (this.solesaenviar).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
      var temporal5 = (this.dolaresaenviar * this.comprainvestrealperu).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
      this.solesaenviar = temporal1;
      this.campodolaresarecibir.nativeElement.value = temporal2;
      this.dolaresarecibir = temporal3;
      this.camposolesaenviar.nativeElement.value = temporal4;
      this.solesarecibir = temporal5;

    });
  }
  getExams() {
    this.Zone.run(() => {
      this.cuentas_de_usuario = this.cuentas_de_usuario;
      this.tarjetas_de_usuario = this.tarjetas_de_usuario;

    });
  }

  async traercuentasytarjetasdeusuario() {
    this.varios.mostrar_selector_de_cuentas_o_actualizando_vista = false;
    this.cuentas_de_usuario = null;
    this.tarjetas_de_usuario = null;
    var datainvestrealperutraercuentasytarjetasdeusuario = {
      nombre_solicitud: 'investrealperutraercuentasytarjetasdeusuario',
      id_user: this.profileInfo.id,
    }
    this.varios.MostrarAlertaMonoOcultarEn8000('present');
    this.varios.variasfunciones(datainvestrealperutraercuentasytarjetasdeusuario).subscribe(async (res: any) => {
      console.log(' respuesta investrealperutraercuentasytarjetasdeusuario', res);
      this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
      this.cuentas_de_usuario = res[0];
      this.tarjetas_de_usuario = res[1];
      // this.contenedor1.complete();
      this.changeDetectorRef.detectChanges();
      var d = document.getElementById('asd');


      this.varios.mostrar_selector_de_cuentas_o_actualizando_vista = true;
      this.changeDetectorRef.detectChanges();
    });
  }



  abrirerrorpaso2() {

  }

  abrirmodalerrorpaso2() {
    this.modalpaso2.present();

  }

  abrirmodalerrorpaso3() {
    this.modalpaso3.present();

  }


  IONCHANGEdatos_de_deposito(event) {
    this.data_de_deposito = event.target.value;
    console.log('this.data_de_deposito', this.data_de_deposito);
  }

  encrypt(value: string): string {
    if (value) {
      return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
    }
  }

  decrypt(textToDecrypt: string) {
    if (textToDecrypt) {
      return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }
  }

  cambiarmododeoperacion() {
    if (!this.quierecomprardolares) {
      this.quierecomprardolares = true;
    }
    else {
      this.quierecomprardolares = false;

    }

  }

  step1() {
    this.step = '1';
    this.data_de_deposito = undefined;
    this.banco_que_envia = undefined;
  }



  step2() {
    var datainvestrealperutraertipodecambio = {
      nombre_solicitud: 'investrealperutraertipodecambio',
    }



    this.step = '2';
  }

  step3() {

    this.varios.MostrarAlertaMonoOcultarEn8000('present');
    var datainvestrealperutraeradmincuentas = {
      nombre_solicitud: 'investrealperutraeradmincuentas',
    }
    this.varios.variasfunciones(datainvestrealperutraeradmincuentas).subscribe(async (res: any) => {
      this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
      console.log(' respuesta investrealperutraeradmincuentas', res);

    if (this.banco_que_envia == 'BCP') {
      if (this.quierecomprardolares == true) {
        this.cuenta_bancaria_admin = {
          banco: res[0].banco,
          moneda: res[0].moneda,
          tipo: res[0].tipo,
          numero: res[0].numero,
          titular: res[0].titular,
        }

      }
      if (this.quierecomprardolares == false) {
        this.cuenta_bancaria_admin = {
          banco: res[1].banco,
          moneda: res[1].moneda,
          tipo: res[1].tipo,
          numero: res[1].numero,
          titular: res[1].titular,
        }
      }
    }
    else if (this.banco_que_envia == 'Interbank') {
      if (this.quierecomprardolares == true) {
        this.cuenta_bancaria_admin = {
          banco: res[2].banco,
          moneda: res[2].moneda,
          tipo: res[2].tipo,
          numero: res[2].numero,
          titular: res[2].titular,
          
        }
      }
      if (this.quierecomprardolares == false) {
        this.cuenta_bancaria_admin = {
          banco: res[3].banco,
          moneda: res[3].moneda,
          tipo: res[3].tipo,
          numero: res[3].numero,
          titular: res[3].titular,
          
        }
      }
    }
    else {

      if (this.quierecomprardolares == true) {
        this.cuenta_bancaria_admin = {
          banco: res[4].banco,
          moneda: res[4].moneda,
          tipo: res[4].tipo,
          numero: res[4].numero,
          titular: res[4].titular,
        }
      }
      if (this.quierecomprardolares == false) {
        this.cuenta_bancaria_admin = {
          banco: res[5].banco,
          moneda: res[5].moneda,
          tipo: res[5].tipo,
          numero: res[5].numero,
          titular: res[5].titular,
        }
      }


    }



      this.step = '3';
    });

  }

  CHANGEDolaresarecibir(event) {

    var temporal = (event.target.value * this.ventainvestrealperu).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    this.camposolesaenviar.nativeElement.value = temporal;
    this.solesaenviar = temporal;
    this.dolaresarecibir = event.target.value;
    this.dolaresarecibir = this.dolaresarecibir.toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    console.log('this.solesaenviar', this.solesaenviar);

  }

  CHANGESolesaenviar(event) {
    var temporal = (event.target.value / this.ventainvestrealperu).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    this.campodolaresarecibir.nativeElement.value = temporal;
    this.solesaenviar = event.target.value;
    this.dolaresarecibir = (this.solesaenviar / this.ventainvestrealperu)
    this.dolaresarecibir = this.dolaresarecibir.toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    // this.solesaenviar=temporal;
  }

  CHANGEDolaresaenviar(event) {

    // dolaresaenviar*comprainvestrealperu 

    var temporal = (event.target.value * this.comprainvestrealperu).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    this.camposolesarecibir.nativeElement.value = temporal;
    this.dolaresaenviar = event.target.value;
    this.solesarecibir = this.dolaresaenviar * this.comprainvestrealperu;
    this.solesarecibir = this.solesarecibir.toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    // this.solesaenviar=temporal;
  }

  CHANGESolesarecibir(event) {
    // dolaresaenviar*comprainvestrealperu 
    var temporal = (event.target.value / this.comprainvestrealperu).toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    this.campodolaresaenviar.nativeElement.value = temporal;
    this.dolaresaenviar = temporal;
    this.solesarecibir = event.target.value;
    this.solesarecibir = this.solesarecibir.toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');

    console.log('this.dolaresaenviar', this.dolaresaenviar);

  }


  isNumberKeyAndLengtSolesaenviar(evt) {

    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8)) {
      return false;//intenta meter un NO numerico ni un punto ni un borrar

    }
    else {

      if (evt.target.value > 1000000000) {
        this.camposolesaenviar.nativeElement.value = 0;
        this.solesaenviar = 0;
        return false; //intenta meter mas de 1000 millones
      }

      var index = evt.target.value.indexOf('.');
      if (index > 0 && charCode == 46) {
        return false;//intenta meter un doble punto cuando ya puso un punto
      }

      if (evt.target.value.split('.')[1] && evt.target.value.split('.')[1].length >= 3) {
        return false; //intenta meter mas decimales que los 2 permitidos
      }
      var len = evt.target.value.length;
      // if (len > 14) {
      //   return false;//intenta meter mas de 14 caracteres en el campo
      // }
      return true;

    }
  }


  isNumberKeyAndLengthDolaresarecibir(evt) {

    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8)) {
      return false;//intenta meter un NO numerico ni un punto ni un borrar

    }
    else {

      if (evt.target.value > 1000000000) {
        this.campodolaresarecibir.nativeElement.value = 0;
        this.solesaenviar = 0;
        return false; //intenta meter mas de 1000 millones
      }

      var index = evt.target.value.indexOf('.');
      if (index > 0 && charCode == 46) {
        return false;//intenta meter un doble punto cuando ya puso un punto
      }

      if (evt.target.value.split('.')[1] && evt.target.value.split('.')[1].length >= 3) {
        return false; //intenta meter mas decimales que los 2 permitidos
      }
      var len = evt.target.value.length;
      // if (len > 14) {
      //   return false;//intenta meter mas de 14 caracteres en el campo
      // }

      return true;

    }
  }

  isNumberKeyAndLengtDolaresaenviar(evt) {

    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8)) {
      return false;//intenta meter un NO numerico ni un punto ni un borrar

    }
    else {

      if (evt.target.value > 1000000000) {
        this.campodolaresaenviar.nativeElement.value = 0;
        this.solesaenviar = 0;
        return false; //intenta meter mas de 1000 millones
      }

      var index = evt.target.value.indexOf('.');
      if (index > 0 && charCode == 46) {
        return false;//intenta meter un doble punto cuando ya puso un punto
      }

      if (evt.target.value.split('.')[1] && evt.target.value.split('.')[1].length >= 3) {
        return false; //intenta meter mas decimales que los 2 permitidos
      }
      var len = evt.target.value.length;
      // if (len > 14) {
      //   return false;//intenta meter mas de 14 caracteres en el campo
      // }
      return true;

    }
  }

  isNumberKeyAndLengtSolesarecibir(evt) {

    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8)) {
      return false;//intenta meter un NO numerico ni un punto ni un borrar

    }
    else {

      if (evt.target.value > 1000000000) {
        this.camposolesarecibir.nativeElement.value = 0;
        this.solesaenviar = 0;
        return false; //intenta meter mas de 1000 millones
      }

      var index = evt.target.value.indexOf('.');
      if (index > 0 && charCode == 46) {
        return false;//intenta meter un doble punto cuando ya puso un punto
      }

      if (evt.target.value.split('.')[1] && evt.target.value.split('.')[1].length >= 3) {
        return false; //intenta meter mas decimales que los 2 permitidos
      }
      var len = evt.target.value.length;
      // if (len > 14) {
      //   return false;//intenta meter mas de 14 caracteres en el campo
      // }
      return true;

    }
  }


  async guardarfotodeoperacion(event: any) {

  }


  async takePicture(event: any) {
    this.ahora_selecciono_otra_foto = true;
    console.log('event.target.files[0]', event.target.files[0]);
    if (event.target.files[0].type == 'image/png' || event.target.files[0].type == 'image/jpeg' || event.target.files[0].type == 'image/jpg' || event.target.files[0].type == 'image/webp') {
      if (event.target.files[0].size < 5254774) {
        const input = <File>event.target.files[0];
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageProfile = event.target.result;
          this.sendPhotos(input);
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      else {
        this.varios.presentToast('Porfavor, Seleccione una imagen real!');
      }
    }
    else {
      this.varios.presentToast('Porfavor, Seleccione una imagen real!');
    }
  }


  async sendPhotos(thumbUrl) {
    const actualizando = await this.loadingController.create({
      message: 'Espere porfavor...', spinner: 'bubbles', duration: 15000,
    });

    actualizando.present();
    this.varios.variasfuncionessinheadercontenttypesubirimagen(thumbUrl).subscribe(async (res: any) => {
      actualizando.dismiss();
      if (res.status > 0) {
        this.new_url_image = res.url;
      }
      else {
        this.varios.presentToast('Porfavor, Seleccione una imagen real!');
      }

    });

  }


  async AgregarAlgo(dataquerecibe) {
    if (dataquerecibe == 'cuenta') {
      this.nuevacuenta();

    }
    else if (dataquerecibe == 'tarjeta') {
      this.nuevatarjeta();

    }
  }

  async nuevacuenta() {
    const modal = await this.modalController.create({
      component: AgregarcuentaotarjetaPage,
      cssClass: 'agregaralgo',
      componentProps: {
        dataparaelmodal: this.profileInfo,
        que_creara: 'cuenta'
      }
    });
    modal.onDidDismiss().then((data) => {
      this.traercuentasytarjetasdeusuario();
      console.log('data.data.respuesta_de_modal', data.data.respuesta_de_modal);
      if (data.data.respuesta_de_modal) {
        this.data_de_deposito = data.data.respuesta_de_modal;
      }
      this.agrego_algo = data.data.que_agrego;
      this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');

    });
    return await modal.present();
  }

  async nuevatarjeta() {
    const modal = await this.modalController.create({
      component: AgregarcuentaotarjetaPage,
      cssClass: 'agregaralgo',
      componentProps: {
        dataparaelmodal: this.profileInfo,
        que_creara: 'tarjeta'
      }
    });
    modal.onDidDismiss().then((data) => {
      this.traercuentasytarjetasdeusuario();
      console.log('data.data.respuesta_de_modal', data.data.respuesta_de_modal);
      if (data.data.respuesta_de_modal) {
        this.data_de_deposito = data.data.respuesta_de_modal;
      }
      this.agrego_algo = data.data.que_agrego;
      this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');

    });
    return await modal.present();
  }

  borrarDataDeDeposito() {
    this.data_de_deposito = undefined;
    this.agrego_algo = undefined;
  }

  enviar_operacion_con_foto() {


    if (this.quierecomprardolares) {
      var quierecomprardolares = 'si';
      var recibe = this.dolaresarecibir;
      // recibe= recibe.toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    }
    else {
      var quierecomprardolares = 'no';
      var recibe = this.solesarecibir;
      // recibe= recibe.toFixed(3).replace(/\.(\d\d)\d?$/, '.$1');
    }

    if (this.cuenta_bancaria_admin && this.profileInfo && this.banco_que_envia && this.data_de_deposito && this.new_url_image) {
      var datainvestrealperuenviaroperacionconfoto = {
        nombre_solicitud: 'investrealperuenviaroperacionconfoto',
        id_user: this.profileInfo.id,
        cuenta_bancaria_admin: JSON.stringify(this.cuenta_bancaria_admin),
        banco_que_envia: this.banco_que_envia,
        quierecomprardolares: quierecomprardolares,
        dolaresaenviar: this.dolaresaenviar,
        email_user: this.profileInfo.email,
        celular_user: this.profileInfo.celular,
        solesaenviar: this.solesaenviar,
        recibe: recibe,
        ventainvestrealperu: this.ventainvestrealperu,
        comprainvestrealperu: this.comprainvestrealperu,
        new_url_image: this.new_url_image,
        data_de_deposito: JSON.stringify(this.data_de_deposito),
        credito_usado: this.credito_usado,
        id_credito_usado: this.id_credito_usado,
        cupon_aplicado: 'no'
      }

      if(this.cupongenerado&&this.cupongenerado.id){
        datainvestrealperuenviaroperacionconfoto.cupon_aplicado=this.cupongenerado.id

      }

      this.varios.variasfunciones(datainvestrealperuenviaroperacionconfoto).subscribe(async (res: any) => {
        console.log(' respuesta investrealperuenviaroperacionconfoto', res);
        this.operacion_enviada_con_foto = res;
        this.step = '4';
      });
    }
    else {
      this.varios.presentToast('Valide los campos anteriores!');
    }



  }

  iramisoperaciones() {
    this.router.navigate(['indash/misoperaciones']);
  }

  otraoperacion() {
    window.location.reload();
  }

  async abrir_modal_creditos(isOpen: boolean) {


    const modal = await this.modalCtrl.create({
      component: ModalcuponesPage,
      componentProps: {
        cssClass: 'my-custom-class',
        dolaresaenviar: this.dolaresaenviar,
        solesaenviar: this.solesaenviar,
        quierecomprardolares: this.quierecomprardolares

      },
      initialBreakpoint: 0.5,
      // backdropBreakpoint: 0.1,
      breakpoints: [0, 1]
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirma_que_si') {
      this.cupongenerado=data;
      console.log('this.cupongenerado',this.cupongenerado);
    }



  }

  cerrar_modal_creditos() {
    // this.modal_creditos.dismiss();
    this.isModalOpen = false;
  }


  quitar_credito() {
    this.credito_usado = undefined;
  }







  ingresar_codigo() {
    console.log('ingresar codigo intento');
    this.vista_en_modal_cupon='ver_cupones';

  }
  volver_a_cuponnes(){
    this.vista_en_modal_cupon='ingresar_cupon';
  }



}

