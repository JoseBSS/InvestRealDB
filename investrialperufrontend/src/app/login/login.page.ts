import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { VariosService } from '../service/varios.service';
import { PaisesService } from '../service/paises.service';
import { Router } from '@angular/router';
import { MenuController, AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, ControlContainer } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public registrodistribuidor: FormGroup;
  public registrodevendedorpordistribuidor: FormGroup;
  public registrodepuntopordistribuidor: FormGroup;

  secretKey = "123456&Descryption";
  quesera: any;
  step: any;
  loginuser: any;
  loginpassword: any;
  passwordCheckbox: boolean = false

  // registrandose 
  // registrandose
  countrySelected: any;
  countryData: any;
  aceptaterminos: boolean = false;
  paisdataseleccionado: any;
  parametrosporlink: any;
  codigo_de_registro_validado: string;
  recordar: boolean = false;
  va_a_registrarse: boolean =false;
  ver_password_login: boolean =false;
  
  constructor(
    private loadingController: LoadingController,
    private location: Location,
    private router: Router,
    public varios: VariosService,
    private paises: PaisesService,
    private menu: MenuController,
    private route: ActivatedRoute,
    private alertController: AlertController,
    public formBuilder: FormBuilder
  ) {
    console.log('Bienvenido');
    this.step = 'login';
    this.countryData = this.paises.countryData;
    this.comprobarSiFueReferido();
  }
  comprobarSiFueReferido() {
    this.route.params.subscribe(params => {
      this.parametrosporlink = params;
      console.log('parametros que llegan por link:', this.parametrosporlink);
      if (params['step']) {
        this.step = params['step'];
      }
    });
  }
  ionViewWillEnter() {
    this.menu.enable(false);
    this.comprobarSiFueReferido();
    this.step = 'login';
    this.restaurarlosrecordar();
  }

  restaurarlosrecordar(){
    if(localStorage.getItem('loginuserarecordar')){
      this.loginuser=localStorage.getItem('loginuserarecordar');
    }
    if(localStorage.getItem('loginpasswordarecordar')){
      this.loginpassword=localStorage.getItem('loginpasswordarecordar')
    }
    console.log('se recordo los datos de inicio con los que decidio recordar');
  }

  iraregistrarse() {
    this.va_a_registrarse=true;
    this.router.navigate(['registrar']);
  }

  olvide() {
  this.varios.presentToast('Enviaremos un corrreo, Porfavor Tambien verifique en spam!');
  this.Enviarcorreorecuperacionpassword();

  }


  async Enviarcorreorecuperacionpassword(){
      // do nothing
      const alert = await this.alertController.create({
        header: 'Ingrese su correo electronico',
        cssClass: 'cerrarsalir-alert',
        inputs: [

          {
            type: 'email',
            placeholder: 'Correo:',
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
              console.log('intentando enviar a ',alertData.codigoingresadoenalerta);
              var datainvestrealperuappinicio = {
                nombre_solicitud: 'investrealperuenviarcorreoderecuperacion',
                correoaenviar: alertData.codigoingresadoenalerta,
              }
              this.varios.MostrarYOcultarAlertaMono('present');
              this.varios.variasfunciones(datainvestrealperuappinicio).subscribe(async (res: any) => {
              this.varios.MostrarYOcultarAlertaMono('dismiss');
              if(res&&res!=null){
                this.varios.presentToast('Enviado, Verifique su correo electronico');
                this.correoenviadoalerta();

                
              }
              else if(!res||res==null){
                this.varios.presentToast('Este correo no esta registrado aún en InvestrealPeru!');

              }

              }, 
              (error) => {
                console.log('Errores', error)
                this.varios.presentToast('Error!');

              }
            );


            },
          },
        ],
      });
      await alert.present();
    
  
  }


  async correoenviadoalerta() {
    const alert = await this.alertController.create({
      header: 'Correo de Recuperación',
      subHeader: 'Correo Enviado',
      message: 'Si ha ingresado correctamente su correo, hemos enviado un E-mail de recuperación porfavor, en caso de no visualizarlo, tambien verifique Spam.',
      buttons: ['Entiendo'],
    });

    await alert.present();
  }


  ngOnInit() {
    this.registrodistribuidor = this.formBuilder.group({
      distribuidor_register_correo: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      distribuidor_register_password: ['', [Validators.required, Validators.minLength(5)]],
      distribuidor_register_password_repetir: ['', [Validators.required, Validators.minLength(5)]],
      distribuidor_register_nombre: ['', [Validators.required, Validators.minLength(2)]],
      distribuidor_register_apellido: ['', [Validators.required, Validators.minLength(2)]],
      distribuidor_register_celular: ['', [Validators.required, Validators.minLength(7)]],
      distribuidor_register_direccion1: ['', [Validators.required, Validators.minLength(5)]],
      distribuidor_register_direccion2: ['', [Validators.required, Validators.minLength(5)]],
    })


  }
  showPassword(input: any, input2: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    input2.type = input2.type === 'password' ? 'text' : 'password';
  }
  ONCHANGEPAIS(event) {
    if (event.target.value) {
      console.log('index', event.target.value);
      this.paisdataseleccionado = this.countryData[event.target.value];
      console.log('paisData', this.paisdataseleccionado);
    }
  }
  async logear() {

    if(this.recordar){
      localStorage.setItem('loginuserarecordar', this.loginuser);
      localStorage.setItem('loginpasswordarecordar', this.loginpassword);

    }
    //el usuario coloco un correo valido con arroba y punto
    var datainvestrealperuappinicio = {
      nombre_solicitud: 'investrealperuappinicio',
      username: this.loginuser,
      password: this.loginpassword
    }
    this.varios.MostrarYOcultarAlertaMono('present');
    console.log('el usuario intenta logear con esta data,', datainvestrealperuappinicio);
    this.varios.variasfunciones(datainvestrealperuappinicio).subscribe(async (res: any) => {
      console.log(' respuesta investrealperuappinicio ', res);
      if (res != 'credencialesincorrectas' && res != null && res.status == 'activo') {
        this.varios.loading2segundos("Verificacíon exitosa...");
        this.varios.MostrarYOcultarAlertaMono('dismiss');
        this.varios.tipo_cuenta = res.tipo_cuenta;
        localStorage.setItem('profileInfo', this.encrypt(JSON.stringify(res)));
        // this.menu.enable(true);
        if (res.tipo_cuenta == '1'&&res.status=='activo') {
          this.router.navigate(['indash/operacion']);
          // window.location.reload();
        }
        if (res.tipo_cuenta == '0') {
          this.router.navigate(['registrar' , {step:'2'}]);
        }

        if (res.tipo_cuenta == '999') {
          this.router.navigate(['homeadmin']);
        }

      }
      else {
        this.varios.quitarloading();
        this.varios.loading2segundos("Verifique sus credenciales.");
      }

    });

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
  cambioterminos() {
    console.log('terminos esta:,', this.aceptaterminos);
  }


  ionViewWillLeave() {
    if(!this.va_a_registrarse){
      window.location.reload();
    }
      
  }
}
