import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
 import { VariosService } from '../service/varios.service';
import {Router} from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import {ElementRef, ViewChild} from '@angular/core';
import { AlertController, IonModal, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AgregarcuentaotarjetaPage } from '../modals/agregarcuentaotarjeta/agregarcuentaotarjeta.page';
import { VisualizadorimagenesPage } from '../modals/visualizadorimagenes/visualizadorimagenes.page';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {
  @ViewChild('modal_detalles_completos_usuario') modal_detalles_usuario: IonModal;
  @ViewChild('detalles_cuentas_y_tarjetas_usuario') detalles_cuentas_y_tarjetas_usuario: IonModal;
  @ViewChild("audiox", { static: false }) audiox;

  step:string = 'inicio';
  profileInfo: any = null;
  solicitudesdeusuario: any;
  aumento_compra: number = 0;
  aumento_venta: number = 0;
  aumento_compra_guardado: number = 0;
  aumento_venta_guardado: number = 0;
  cuentasdeusuario: any;
  paguinaactualusuario: number =0;
  dataparaelmodal_usuario: any;
  dataparaelmodal_cuentas_y_tarjetas: any;
  audio: any;
  menu_promociones: any;
  promocion1_imageProfile: any = null;
  promocion1_new_url_image: any = null;
  comprainvestrealperu: any;
  ventainvestrealperu: any;
  vistaverhistorialdecambio: boolean = false;
  historial_de_cambios_por_admin: any;
  constructor(
    private modalController: ModalController,
    private ElementRef : ElementRef,
    private currencyPipe: CurrencyPipe,
        public varios: VariosService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,

    private decimalPipe: DecimalPipe,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() 
  {
    // El Audio (!ObligatoriaMente!) Debe nacer en el ngOnInit
    // El Audio (!ObligatoriaMente!) Debe nacer en el ngOnInit

  }


  ionViewWillEnter(){
    this.varios.ConsultarUsuarioADMIN999().subscribe(async( res: any ) =>{
      console.log('res x service en vista', res);
      this.profileInfo=res;
    });
    

  }

  clickenelcontent(){
    if(this.audio) {
      this.audio.pause();
      // this.audio = null;
    }
  }

  stepinicio(){
    this.step='inicio';
    this.paguinaactualusuario=0;
    this.varios.activar_real_time_admin_solicitudes=false;
    if(this.audio) {
      this.audio.pause();
      // this.audio = null;
    }
  }

  endesarrollo(){
    this.varios.presentToast('En Desarrollo!');
  }

  cerrarsesion(){
    this.varios.logout();
  }


  irasolicitudes(){




    var datainvestrealperuadminobteneroperaciones = {
      nombre_solicitud: 'investrealperuadminobteneroperaciones',
    }
    this.varios.variasfunciones(datainvestrealperuadminobteneroperaciones).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadminobteneroperaciones',res);
      this.solicitudesdeusuario=res;
      this.varios.activar_real_time_admin_solicitudes=true;
      this.TraerSolicitudesConrealtime();
      this.step='versolicitudes';


      this.audio = new Audio();
      this.audio.src = 'https://equipojotamar.com/backend/public/notifysound.ogg';
      this.audio.load();
  
    });

  }

  async vercuenta(cadasolicitud){

    if(cadasolicitud.titular_tarjeta){
      const alert = await this.alertController.create({
        header: 'Datos!',
        subHeader: 'debe depositarle a:',
        message: `
        <p>Tarjeta:</p>
        <p>* Titular:`+cadasolicitud.titular_tarjeta+` </p>
        <ul>
          <li>*NUMERO*`+cadasolicitud.numero_tarjeta+` </li>
          <li>*BANCO*`+cadasolicitud.banco_tarjeta+` </li>
          <li>*TITULAR*`+cadasolicitud.titular_tarjeta+` </li>
         <li>¿debe depositarle Dolares?, R)=`+cadasolicitud.quierecomprardolares+` </li>
        </ul>
      `,
        buttons: ['OK'],
      });
   await alert.present();

    }
    if(cadasolicitud.titular_cuenta){
      const alert = await this.alertController.create({
        header: 'Datos!',
        subHeader: 'debe depositarle a:',
        message: `
        <p>Cuenta:</p>
        <p>* Titular:`+cadasolicitud.titular_cuenta+` </p>
        <ul>
          <li>*NUMERO*:`+cadasolicitud.numero_cuenta+` </li>
          <li>*MONEDA*`+cadasolicitud.moneda_cuenta+` </li>
          <li>*BANCO*`+cadasolicitud.banco_cuenta+` </li>
          <li>*CUANTO*`+cadasolicitud.recibe+` </li>
          <li>¿debe depositarle Dolares?, R)=`+cadasolicitud.quierecomprardolares+` </li>

      `,
        buttons: ['OK'],
      });
   await alert.present();
    }
  
  
  }

  TraerSolicitudesConrealtime(){
    if(this.varios.activar_real_time_admin_solicitudes==true){
      // this.audio.pause(); 
      setTimeout(() => 
      {

        var datainvestrealperuadminobteneroperaciones = {
          nombre_solicitud: 'investrealperuadminobteneroperaciones',
        }
        this.varios.variasfunciones(datainvestrealperuadminobteneroperaciones).subscribe(async( res: any ) =>{
          if(this.solicitudesdeusuario&&this.solicitudesdeusuario.length!=res.length){
            console.log(' respuesta investrealperuadminobteneroperaciones',res);
            this.solicitudesdeusuario=res;
            this.audio.play();
            this.audio.loop = true;
            this.varios.presentToastAdminNotificacion('Nueva Solicitud en curso!');

            this.changeDetectorRef.detectChanges();//(Metodo 2# Rep. Por ViewChild) detertor de cambios para cargar viewChilds No estaticos
            this.audiox.nativeElement.oncanplaythrough = () => {
              // alert("Can play through video without stopping");
              this.audiox.nativeElement.play();
            };

          }
          // this.step='versolicitudes';
        this.TraerSolicitudesConrealtime();
        });
      },
      5000);
    }

  }


  async VerImagen(ImgUrl) {
    const modal = await this.modalController.create({
      component: VisualizadorimagenesPage,
      componentProps: {
        'dataparaelmodal': ImgUrl
      },
      initialBreakpoint: 1.2,
      breakpoints: [1, 1.5, 1]
    });
    modal.onDidDismiss().then((data) => {
        console.log('data',data);
      });
  
  
    return await modal.present();
  }

  aumentarpaginausuario(){
    if(this.paguinaactualusuario<this.cuentasdeusuario.length){
      this.paguinaactualusuario=this.paguinaactualusuario+++10;
    }
  }

  disminuirpaginausuario(){
    if(this.paguinaactualusuario>0){
      this.paguinaactualusuario=this.paguinaactualusuario---10;
    }
  }
  
  atender(cadasolicitud){


    var datainvestrealperuadminatenderoperacion = {
      nombre_solicitud: 'investrealperuadminatenderoperacion',
      id: cadasolicitud.id,
      quierecomprardolares: cadasolicitud.quierecomprardolares,
      recibe: cadasolicitud.recibe,
      dolaresaenviar: cadasolicitud.dolaresaenviar,
      id_user:cadasolicitud.id_user,

    }
    this.varios.variasfunciones(datainvestrealperuadminatenderoperacion).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadminatenderoperacion',res);
      
      if(res>0){
        var datainvestrealperuadminobteneroperaciones = {
          nombre_solicitud: 'investrealperuadminobteneroperaciones',
        }
        this.varios.variasfunciones(datainvestrealperuadminobteneroperaciones).subscribe(async( res: any ) =>{
          console.log(' respuesta investrealperuadminobteneroperaciones',res);
          this.solicitudesdeusuario=res;
          this.step='versolicitudes';
        });
      }
    });


  
}

cancelarla(cadasolicitud){


  var datainvestrealperuadmincancelaroperacion = {
    nombre_solicitud: 'investrealperuadmincancelaroperacion',
    id: cadasolicitud.id
  }
  this.varios.variasfunciones(datainvestrealperuadmincancelaroperacion).subscribe(async( res: any ) =>{
    console.log(' respuesta investrealperuadmincancelaroperacion',res);
    
    if(res>0){
      var datainvestrealperuadminobteneroperaciones = {
        nombre_solicitud: 'investrealperuadminobteneroperaciones',
      }
      this.varios.variasfunciones(datainvestrealperuadminobteneroperaciones).subscribe(async( res: any ) =>{
        console.log(' respuesta investrealperuadminobteneroperaciones',res);
        this.solicitudesdeusuario=res;
        this.step='versolicitudes';
      });
    }
  });



}

avisarwhatsappp(cadasolicitud){
  // window.open('https://api.whatsapp.com/send?phone=+'+cadasolicitud.celular_user, '_blank').focus();

  
  let num=cadasolicitud.celular_user;
  num=num.replace(/[+]/g, ''); //eliminamos signos mas
  num=num.replace(/\s/g, ""); //eliminamos espacios
  num= num.replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, ""); //eliminamos parentesis
  let msg= 'Tu solicitud Nro. '+cadasolicitud.id;

    let name= cadasolicitud.email_user;
  
  window.open(`https://wa.me/${num}?text=Operación%20InvestrealPeru%20Completada,%20Hola%20${name}%20Completamos%20${msg}`, '_blank');
 // win.focus();

}

mailto(emailAddress: string, emailSubject: any, cadasolicitud ) {
  var body = 'Tu solicitud Nro'+cadasolicitud.id+'Ha sido Completada y el saldo esta disponible en tu cuenta';
  return "mailto:" + emailAddress + "?subject=" + emailSubject + "&body=" + body
}


  iraadministrarusuarios(){
    
    var datainvestrealperuadmintraerusuarios = {
      nombre_solicitud: 'investrealperuadmintraerusuarios',
      tipo_cuenta:this.profileInfo.tipo_cuenta
    }
    this.varios.MostrarYOcultarAlertaMono('present');
    this.varios.variasfunciones(datainvestrealperuadmintraerusuarios).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadmintraerusuarios',res);
      this.cuentasdeusuario=res;
      this.step='administrarusuarios';
      this.varios.MostrarYOcultarAlertaMono('dismiss');
    });
  }

  iraadministrardivisas(){

    var datainvestrealperutraeraumentos = {
      nombre_solicitud: 'investrealperutraeraumentos',
    }
    this.varios.MostrarYOcultarAlertaMono('present');
    this.varios.variasfunciones(datainvestrealperutraeraumentos).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperutraeraumentos',res);
      this.aumento_compra=res.aumento_compra;
      this.aumento_compra_guardado=res.aumento_compra;
      this.aumento_venta=res.aumento_venta;
      this.aumento_venta_guardado=res.aumento_venta;
      this.varios.MostrarYOcultarAlertaMono('dismiss');
      this.step='administrardivisas';
    });

  
      var datainvestrealperutraertipodecambio = {
        nombre_solicitud: 'investrealperutraertipodecambio',
      }
      this.varios.variasfunciones(datainvestrealperutraertipodecambio).subscribe(async( res: any ) =>{
        console.log(' respuesta investrealperutraertipodecambio',res);
        this.comprainvestrealperu=res[0];
        this.ventainvestrealperu=res[1];
       });


  }

  iravercuentasytarjetasdeusuario(){

    var datainvestrealperuadmintraerusuarios = {
      nombre_solicitud: 'investrealperuadmintraerusuarios',
      tipo_cuenta:this.profileInfo.tipo_cuenta
    }
    this.varios.MostrarYOcultarAlertaMono('present');
    this.varios.variasfunciones(datainvestrealperuadmintraerusuarios).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadmintraerusuarios',res);
      this.cuentasdeusuario=res;
      this.step='vercuentasytarjetasdeusuario';
      this.varios.MostrarYOcultarAlertaMono('dismiss');
    });

  }


  aumentarcompra(){
    this.aumento_compra=this.aumento_compra +++ 0.001;
    this.comprainvestrealperu = this.comprainvestrealperu +++ 0.001;

  }

  aumentarventa(){
    this.aumento_venta=this.aumento_venta +++ 0.001;
    this.ventainvestrealperu = this.ventainvestrealperu  +++ 0.001;
  }

  disminuircompra(){
    this.aumento_compra=this.aumento_compra --- 0.001;
    this.comprainvestrealperu = this.comprainvestrealperu --- 0.001;

  }

  disminuirventa(){
    this.aumento_venta=this.aumento_venta --- 0.001;
    this.ventainvestrealperu = this.ventainvestrealperu --- 0.001;

  }

  actualizaraumentocompra(){
    console.log("this.decimalPipe.transform(this.aumento_compra, '1.3-3')",this.decimalPipe.transform(this.aumento_compra, '1.3-3'));

    var datainvestrealperucambiaraumentocompra = {
      nombre_solicitud: 'investrealperucambiaraumentocompra',
      aumento_compra:this.decimalPipe.transform(this.aumento_compra, '1.3-3'),
      id_usuario:this.profileInfo.id
    }
    this.varios.variasfunciones(datainvestrealperucambiaraumentocompra).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperucambiaraumentocompra',res);
      if(res>0){
        this.iraadministrardivisas();
      }
    });

  }
  actualizaraumentoventa(){
    console.log("this.decimalPipe.transform(this.aumento_venta, '1.3-3')", this.decimalPipe.transform(this.aumento_venta, '1.3-3'));

    var datainvestrealperucambiaraumentoventa = {
      nombre_solicitud: 'investrealperucambiaraumentoventa',
      aumento_venta:this.decimalPipe.transform(this.aumento_venta, '1.3-3'),
      id_usuario:this.profileInfo.id
    }
    this.varios.variasfunciones(datainvestrealperucambiaraumentoventa).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperucambiaraumentoventa',res);
      if(res>0){
        this.iraadministrardivisas();
      }
    });

  }


  desactivarusuario(cadausuario){

    var datainvestrealperuadminusuariodesactivar = {
      nombre_solicitud: 'investrealperuadminusuariodesactivar',
      id:cadausuario.id
    }
    this.varios.variasfunciones(datainvestrealperuadminusuariodesactivar).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadminusuariodesactivar',res);
      if(res>0){
        this.iraadministrarusuarios();
      }
    });

  }

  activarusuario(cadausuario){

    var datainvestrealperuadminusuarioactivar = {
      nombre_solicitud: 'investrealperuadminusuarioactivar',
      id:cadausuario.id
    }
    this.varios.variasfunciones(datainvestrealperuadminusuarioactivar).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadminusuarioactivar',res);
      if(res>0){
        this.iraadministrarusuarios();
      }
    });

  }

  abrir_modal_detalles_usuario(dataparaelmodal_usuario){
    this.dataparaelmodal_usuario=dataparaelmodal_usuario;
    console.log('this.dataparaelmodal_usuario',this.dataparaelmodal_usuario);
    this.modal_detalles_usuario.present();
  
  }
  
  cerrar_modal_detalles_usuario(){
    this.modal_detalles_usuario.dismiss();
  }

  abrir_modal_detalles_cuentas_y_tarjetas(dataparaelmodal_usuario_tarjetas_y_cuentas){
    
    var datainvestrealperuuadmintraercuentasytarjetasdeusuario = {
      nombre_solicitud: 'investrealperuuadmintraercuentasytarjetasdeusuario',
      id_user:dataparaelmodal_usuario_tarjetas_y_cuentas.id
    }
    this.varios.variasfunciones(datainvestrealperuuadmintraercuentasytarjetasdeusuario).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuuadmintraercuentasytarjetasdeusuario',res);
        this.dataparaelmodal_cuentas_y_tarjetas=res;
        this.detalles_cuentas_y_tarjetas_usuario.present();

    });
  
  }
  
  cerrar_modal_detalles_cuentas_y_tarjetas(){
    this.detalles_cuentas_y_tarjetas_usuario.dismiss();
  }

  iraadministrarpromociones(){
    this.consultarpromociones();
    this.step='administrarpromociones';
  }
  
  consultarpromociones(){
    var datainvestrealperuusuariostraerpromociones = {
      nombre_solicitud: 'investrealperuusuariostraerpromociones1',
    }
    this.varios.variasfunciones(datainvestrealperuusuariostraerpromociones).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuusuariostraerpromociones',res);
      this.menu_promociones=res;
  
    });
  }

  async takePicture(event: any) {
    const input = <File>event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.promocion1_imageProfile = event.target.result;
      this.sendPhotos(input);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  async sendPhotos(file) {
    const actualizando = await this.loadingController.create({
      message: 'Espere porfavor...', spinner: 'bubbles', duration: 15000,
    });
    actualizando.present();
    this.varios.generateUrl(file).subscribe(x => {
      // let imagentemporal = new Image();
      // imagentemporal.urlImage = x.data.url;
      this.promocion1_new_url_image = x.data.url;
      console.log('this.new_url_image', this.promocion1_new_url_image);
      if(this.promocion1_new_url_image){

        var datainvestrealperuadminagregarpromociones1 = {
          nombre_solicitud: 'investrealperuadminagregarpromociones1',
          promocion1_new_url_image: this.promocion1_new_url_image
        }
        this.varios.variasfunciones(datainvestrealperuadminagregarpromociones1).subscribe(async( res: any ) =>{
          console.log(' respuesta investrealperuadminagregarpromociones1',res);
          if(res.id>0){
            this.consultarpromociones();
                      }
          else{
            this.varios.presentToast('Seleccione Una Imagen de verdad!');
          }
        });

      }
      actualizando.dismiss();
    });
  }

  borrarpromocion1(cadapromosion){
    var datainvestrealperuadminborrarpromociones1 = {
      nombre_solicitud: 'investrealperuadminborrarpromociones1',
      id:cadapromosion.id
    }
    this.varios.variasfunciones(datainvestrealperuadminborrarpromociones1).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadminborrarpromociones1',res);
      this.consultarpromociones();
    });
  }

  ver_historial_de_cambios(){
    var datainvestrealperuadminborrarpromociones1 = {
      nombre_solicitud: 'investrealperuadminverhistorialdecambios',
      tipo_cuenta:this.profileInfo.tipo_cuenta

    }
    this.varios.variasfunciones(datainvestrealperuadminborrarpromociones1).subscribe(async( res: any ) =>{
      console.log(' respuesta investrealperuadminverhistorialdecambios',res);
      this.historial_de_cambios_por_admin=res;
      this.vistaverhistorialdecambio=true;
    });
  }

  cambiar_vista_ver_historial_a_verdadero(){
    this.vistaverhistorialdecambio=true;

  }

}
