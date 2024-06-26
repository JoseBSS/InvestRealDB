import { Component, OnInit, ViewChild, Input } from '@angular/core'
import * as CryptoJS from 'crypto-js'
import { VariosService } from '../service/varios.service'
import { PaisesService } from '../service/paises.service'
import { Router } from '@angular/router'
import {
  MenuController,
  AlertController,
  LoadingController,
  ModalController,
  IonToggle,
} from '@ionic/angular'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ControlContainer,
} from '@angular/forms'
import { IonModal } from '@ionic/angular'
import { DepartamentosService } from '../service/departamentos.service'
import { ProvinciasService } from '../service/provincias.service'
import { DistritosService } from '../service/distritos.service'
import { PersonapoliticaPage } from '../modals/personapolitica/personapolitica.page'
// import { setOptions, getJson , localeEs } from '@mobiscroll/angular-lite';

// import { IonIntlTelInputModule } from 'ion-intl-tel-input'
// import "../../assets/investrealperurecursos/banderas/css";
import { HttpClient } from '@angular/common/http'
import { PhonewithflagsService } from '../service/phonewithflags.service'
import { Item } from '../components/typeahead/types'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  // empieza el codigo de selector de pais
  countrycode = {
    isoCode: '',
    dialCode: '',
    internationalNumber: '',
    nationalNumber: '',
  };



  country_code: any;
  defaultCountryIsoTest = 'pe';
  dialCodePrefix = '+';
  enableAutoCountrySelect = true;
  enablePlaceholder = true;
  fallbackPlaceholder = 'pe';
  inputPlaceholder = 'Teléfono';
  minLength = '8';
  modalTitle = 'Seleccione pais';
  modalCssClass = '';
  modalSearchPlaceholder = 'Ingrese un nombre de pais';
  modalCloseText = 'Cerrar';
  modalCloseButtonSlot = 'end';
  modalCanSearch = true;
  modalShouldFocusSearchbar = true;
  modalSearchFailText = 'No encontrados.';

  // termina el codigo de selector de pais

  @ViewChild('modalerrores') modal_errores: IonModal;
  @ViewChild('toggle_persona') el_toggle: IonToggle;
  @ViewChild('modalfiltropaises') modal_filtro_paises: IonModal;

  departamentos = DepartamentosService.departamentosdata;
  provincias = ProvinciasService.provincias;
  distritos = DistritosService.distritos;

  public registrousuario: FormGroup;
  public updateusuario1: FormGroup;
  public updateusuario2: FormGroup;
  Fecha_Actual: Date = new Date();
  secretKey = '123456&Descryption';
  quesera: any;
  step: string = '1';
  registraruser: any;
  registrarpassword: any;
  passwordCheckbox: boolean = false;

  // registrandose
  // registrandose
  countrySelected: any;
  countryData: any;
  aceptaterminos: boolean = false;
  paisdataseleccionado: any;
  parametrosporlink: any;
  codigo_de_registro_validado: string;
  recordar: boolean = false;
  es_empresa: string = '0';
  provinciasfiltradas: any = null;
  distritosfiltradas: any = null;
  profileInfo: any;
  politicamente_expuesta: boolean = false;
  nombre_politico: string = undefined;
  institucion_politica: string = undefined;
  cargo_politico: string = undefined;
  acepto_terminos: boolean = false;
  codigo_pais: string = '51';
  myData: any;
  es_representante: boolean = true;
  es_accionista_mayor_25: boolean = true;
  existen_otros_mayor_25: boolean = false;
  // otros_mayor_25: any;
  public otros_mayor_25: any = [];
  // otros_mayor_25: number = 0;
  representante_dato_1: any;
  representante_dato_2: any;
  representante_dato_3: any
  razon_social: any;
  // variables PARA EL SEARCHBAR DEL MODAL filtro
  valores_codigos_banderas: any = this.matriz_codigos.codigosconbanderas;
  public results = [...this.valores_codigos_banderas];
  // variables PARA EL SEARCHBAR DEL MODAL filtro
  numerosinpais: string;
  numerocompletooo: string;

  constructor(
    private http: HttpClient,
    public menuCtrl: MenuController,
    private loadingController: LoadingController,
    private location: Location,
    private router: Router,
    public varios: VariosService,
    private paises: PaisesService,
    private menu: MenuController,
    private route: ActivatedRoute,
    private alertController: AlertController,
    public formBuilder: FormBuilder,
    public modalController: ModalController,
    public matriz_codigos: PhonewithflagsService
  ) {
    console.log('Bienvenido')
    this.countryData = this.paises.countryData;
    this.varios.pais_seleccionado_con_bandera = {
      name: 'Peru',
      code: '+51',
      iso: 'PE',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/pe.svg',
      mask: '(###)###-###'

    }
    this.comprobarSiFueReferido()
  }
  comprobarSiFueReferido() {
    this.route.params.subscribe((params) => {
      this.parametrosporlink = params
      console.log('parametros que llegan por link:', this.parametrosporlink)
      if (params['step']) {
        this.step = params['step']
      }
    })
  }

  iralogin() {
    this.router.navigate(['login'])
  }

  olvide() {}
  ngOnInit(): void {
    this.http
      .get('https://trial.mobiscroll.com/content/countries.json')
      .subscribe((resp: any) => {
        const countries = []
        for (let i = 0; i < resp.length; ++i) {
          const country = resp[i]
          countries.push({ text: country.text, value: country.value })
        }
        this.myData = countries
      })

    this.registrousuario = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(7)]],
      password_repetir: ['', [Validators.required, Validators.minLength(5)]],
    })

    this.updateusuario1 = this.formBuilder.group({
      es_empresa: ['0'],
      tipo_documento: ['1'],
      numero_documento: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(16),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      lastname2: [''],
      referidor: [''],
      celular: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.updateusuario2 = this.formBuilder.group({
      fecha_nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      direccion1: ['', [Validators.required, Validators.minLength(3)]],
      region: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      distrito: ['', [Validators.required]],
      nombre_politico: [null],
      institucion_politica: [null],
      cargo_politico: [null],
    })
  }
  showPassword(input: any, input2: any): any {
    input.type = input.type === 'password' ? 'text' : 'password'
    input2.type = input2.type === 'password' ? 'text' : 'password'
  }
  ONCHANGEPAIS(event) {
    if (event.target.value) {
      console.log('index', event.target.value)
      this.paisdataseleccionado = this.countryData[event.target.value]
      console.log('paisData', this.paisdataseleccionado)
    }
  }
  showCountryName(event) {
    console.log('event111', event)
    // var countrycode=document.getElementById('countrycode');
    // console.log('countrycode',countrycode);
    this.updateusuario1.controls['celular'].setValue(event.target.value)

    // document.getElementById('seven').innerHTML=countrycode;
  }
  codechangeeee(event) {
    console.log('event2222', event)

    // console.log('event.target.value',event.target.value);
    // var temporal=  event.target.textContent.split("+")[0];
    // console.log('temporal',temporal);
    // this.updateusuario1.controls['celular'].setValue(event.target.value);
  }

  consultarempresa(event) {
    if (
      event.target.value.length > 10 &&
      event.target.value > 1000000000 &&
      event.target.value < 99000000000
    ) {
      var datainvestrealperuconsultarruc = {
        nombre_solicitud: 'investrealperuconsultarruc',
        ruc: event.target.value,
      }
      this.varios.MostrarYOcultarAlertaMono('present')
      this.varios
        .variasfunciones(datainvestrealperuconsultarruc)
        .subscribe(async (res: any) => {
          console.log('respuesta de investrealperuconsultarruc', res)
          this.varios.MostrarYOcultarAlertaMono('dismiss')
          if (res && res.nombre) {
            this.razon_social = res.nombre
          }
          if (res && res.direccion.length > 5) {
            this.updateusuario2.controls['direccion1'].setValue(res.direccion)
          } else {
            this.updateusuario2.controls['direccion1'].setValue('')
          }

          // this.updateusuario1.value.name=res.nombres;
          // this.updateusuario1.value.lastname=res.apellidoPaterno;
          // this.updateusuario1.value.lastname2=res.apellidoMaterno;
        })
    }
  }

  consultardnioruc(event) {
    if (
      this.updateusuario1.value.tipo_documento == '1' &&
      event.target.value.length > 7 &&
      event.target.value > 1000000 &&
      event.target.value < 99000000
    ) {
      var datainvestrealperuconsultardni = {
        nombre_solicitud: 'investrealperuconsultardni',
        dni: event.target.value,
      }
      this.varios.MostrarYOcultarAlertaMono('present')
      this.varios
        .variasfunciones(datainvestrealperuconsultardni)
        .subscribe(async (res: any) => {
          console.log('respuesta de investrealperuconsultardni', res)
          this.varios.MostrarYOcultarAlertaMono('dismiss')
          if (res && res.nombre) {
            this.updateusuario1.setValue({
              name: res.nombre,
              lastname: res.apellidoPaterno,
              lastname2: res.apellidoMaterno,
              es_empresa: '0',
              tipo_documento: '1',
              numero_documento: res.numeroDocumento,
              referidor: '',
              celular: '',
            })

            // this.updateusuario1.value.name=res.nombres;
            // this.updateusuario1.value.lastname=res.apellidoPaterno;
            // this.updateusuario1.value.lastname2=res.apellidoMaterno;
          }
        })
    } else if (
      this.updateusuario1.value.tipo_documento == '5' &&
      event.target.value.length > 10 &&
      event.target.value > 1000000000 &&
      event.target.value < 99000000000
    ) {
      var datainvestrealperuconsultarruc = {
        nombre_solicitud: 'investrealperuconsultarruc',
        ruc: event.target.value,
      }
      this.varios.MostrarYOcultarAlertaMono('present')
      this.varios
        .variasfunciones(datainvestrealperuconsultarruc)
        .subscribe(async (res: any) => {
          console.log('respuesta de investrealperuconsultarruc', res)
          this.varios.MostrarYOcultarAlertaMono('dismiss')
          if (res && res.nombre) {
            var nombrespersona = res.nombre
            nombrespersona = nombrespersona.split(' ')

            if (nombrespersona && nombrespersona.length == 4) {
              this.updateusuario1.setValue({
                name: nombrespersona[2] + ' ' + nombrespersona[3],
                lastname: nombrespersona[0],
                lastname2: nombrespersona[1],
                es_empresa: '0',
                tipo_documento: '5',
                numero_documento: res.numeroDocumento,
                referidor: '',
                celular: '',
              })
            }

            if (nombrespersona && nombrespersona.length == 3) {
              this.updateusuario1.setValue({
                name: nombrespersona[2],
                lastname: nombrespersona[0],
                lastname2: nombrespersona[1],
                es_empresa: '0',
                tipo_documento: '5',
                numero_documento: res.numeroDocumento,
                referidor: '',
                celular: '',
              })
            }

            // this.updateusuario1.value.name=res.nombres;
            // this.updateusuario1.value.lastname=res.apellidoPaterno;
            // this.updateusuario1.value.lastname2=res.apellidoMaterno;
          }
        })
    }
  }

  IONCHANGEregion(event) {
    console.log('event region', event)
    this.updateusuario2.value.provincia = ''
    this.updateusuario2.value.distrito = ''
    this.updateusuario2.value.region = event.target.value
    this.provinciasfiltradas = this.provincias[event.target.value]
    console.log('provinciasfiltradas', this.provinciasfiltradas)
  }

  IONCHANGEprovincia(event) {
    console.log('event.target.value', event.target.value)
    this.updateusuario2.value.distrito = ''
    this.updateusuario2.value.provincia = event.target.value
    this.distritosfiltradas = this.distritos[event.target.value]
    console.log('distritosfiltradas', this.distritosfiltradas)
  }

  IONCHANGEdistrito(event) {
    this.updateusuario2.value.distrito = event.target.value
  }

  selectorempresa0() {
    console.log('persona')
    this.updateusuario1.value.es_empresa = '0'
    this.es_empresa = '0'
  }

  selectorempresa1() {
    console.log('empresa')
    this.updateusuario1.value.es_empresa = '1'
    this.es_empresa = '1'
  }

  async consoledeerrores() {
    console.log('Consola de errores: registrousuario', this.registrousuario)
    console.log(
      'el boton se presion: formulario invalido, ya se imprimio la consola de erroes'
    )
  }

  IONCHANGEes_representante(event) {
    this.es_representante = event.detail.checked
  }

  IONCHANGEes_accionista_mayor_25(event) {
    this.es_accionista_mayor_25 = event.detail.checked
  }

  IONCHANGEexisten_otros_mayor_25(event) {
    this.existen_otros_mayor_25 = event.detail.checked

    if (event.detail.checked == true) {
      var posicion0 = {
        tipo_doc: undefined,
        numero_doc: undefined,
        apellido_y_nombre: undefined,
      }
      this.otros_mayor_25.push(posicion0)
      // this.otros_mayor_25[0] = {
      //   tipo_doc:undefined,
      //   numero_doc:undefined,
      //   apellido_y_nombre:undefined,
      // }
    } else {
      this.otros_mayor_25 = []
    }
  }

  agregaraccionista() {
    var posicion1 = {
      tipo_doc: undefined,
      numero_doc: undefined,
      apellido_y_nombre: undefined,
    }
    this.otros_mayor_25.push(posicion1)
  }

  quitaraccionistaenlaposicion1() {
    this.otros_mayor_25.pop()
  }

  async funcion_registrar_usuario() {
    console.log('funcion_registrar_usuario ')
    console.log('funcion_registrar_usuario ', this.acepto_terminos)
    console.log('this.registrousuario', this.registrousuario)

    if (this.acepto_terminos) {
      if (
        this.registrousuario.valid &&
        this.registrousuario.value.password ==
          this.registrousuario.value.password_repetir
      ) {
        var date = new Date()
        var datainvestrealperuappcreateuser = {
          nombre_solicitud: 'investrealperuappcreateuser',
          create_date: date,
          email: this.registrousuario.value.email,
          username: this.registrousuario.value.email,
          password: this.registrousuario.value.password,
        }
        console.log(
          'el usuario intenta registrarse con esta data,',
          datainvestrealperuappcreateuser
        )
        this.varios.MostrarYOcultarAlertaMono('present')
        this.varios.variasfunciones(datainvestrealperuappcreateuser).subscribe(
          async (res: any) => {
            this.varios.MostrarYOcultarAlertaMono('dismiss')
            console.log(' respuesta investrealperuappcreateuser ', res)
            if (res && res.id > 0) {
              localStorage.setItem(
                'profileInfo',
                this.encrypt(JSON.stringify(res))
              )
              this.varios.tipo_cuenta = res.tipo_cuenta
              this.varios.loading2segundos('Registro exitoso, Regirigiendo...')
              this.varios.presentToast(
                '..::Usuario Registrado correctamente::..'
              )

              this.profileInfo = res
              // this.router.navigate(['indash/homed']);
              this.step = '2'
              this.registrousuario = undefined
            }
          },
          (error) => {
            console.log('Errores', error)
            if (error) {
              this.varios.loading2segundos(
                'El usuario o su correo ya fue registrado intente con otro.'
              )
              this.varios.presentToast(
                '..::intente con otro Usuario/Correo::..'
              )
            }
          }
        )
      } else {
        console.log('Formulario invalido')
      }
    } else {
      this.varios.presentToast('Acepte los terminos y condiciones')
    }
  }

  cerrarmodal_errores() {
    console.log('Form updateusuario1', this.updateusuario1)
    this.modal_errores.dismiss()
  }

  abrirmodal_errores_2() {
    console.log('Form updateusuario1', this.updateusuario1)
    this.modal_errores.present()
  }

  abrirmodal_errores() {
    console.log('Form registrousuario', this.registrousuario)
    this.modal_errores.present()
  }

  abrirmodal_errores_3() {
    console.log('Form updateusuario1', this.updateusuario2)
    this.modal_errores.present()
  }

  update_pausado_por_step3() {
    if (this.updateusuario1.valid) {
      if (this.es_empresa == '1') {
        this.updateusuario2.controls['genero'].setValue('  ')
      }
      this.step = '3'
    } else {
      console.log('Formulario invalido')
    }
  }

  CHANGEcelularrr2(){
    this.updateusuario1.controls['celular'].setValue(this.varios.pais_seleccionado_con_bandera +' '+ this.numerosinpais);
    console.log('celular',this.varios.pais_seleccionado_con_bandera +' '+ this.numerosinpais);
    console.log('form celular', this.updateusuario2.controls['celular']);
    this.numerocompletooo= this.varios.pais_seleccionado_con_bandera +' '+ this.numerosinpais;
  }


  enviarregistrocompletadoFULListo() {



    if ((this.politicamente_expuesta = false)) {
      this.nombre_politico = undefined
      this.institucion_politica = undefined
      this.cargo_politico = undefined
    }

    if (this.updateusuario2.valid) {
      console.log('updateusuario2', this.updateusuario2)
      const resultadodebusqudadepartamento = this.departamentos.find(
        ({ id_ubigeo }) => id_ubigeo === this.updateusuario2.value.region
      )
      const resultadodebusqudaprovincia = ProvinciasService.provincias[
        this.updateusuario2.value.region
      ].find(
        ({ id_ubigeo }) => id_ubigeo === this.updateusuario2.value.provincia
      )
      const resultadodebusqudadistrito = DistritosService.distritos[
        this.updateusuario2.value.provincia
      ].find(
        ({ id_ubigeo }) => id_ubigeo === this.updateusuario2.value.distrito
      )

      if (this.profileInfo && this.profileInfo.id) {
      } else {
        this.profileInfo = localStorage.getItem('profileInfo')
        this.profileInfo = this.decrypt(this.profileInfo)
        this.profileInfo = JSON.parse(this.profileInfo)
      }
   
      var datainvestrealperuappcompletandoregistro = {
        nombre_solicitud: 'investrealperuactualizarperfilcompleto',
        id: this.profileInfo.id,
        region: resultadodebusqudadepartamento.nombre_ubigeo,
        provincia: resultadodebusqudaprovincia.nombre_ubigeo,
        distrito: resultadodebusqudadistrito.nombre_ubigeo,

        es_empresa: this.updateusuario1.value.es_empresa,
        tipo_documento: this.updateusuario1.value.tipo_documento,
        numero_documento: this.updateusuario1.value.numero_documento,
        name: this.updateusuario1.value.name,
        lastname: this.updateusuario1.value.lastname,
        lastname2: this.updateusuario1.value.lastname2,
        referidor: this.updateusuario1.value.referidor,
        celular: this.numerocompletooo,

        fecha_nacimiento: this.updateusuario2.value.fecha_nacimiento,
        genero: this.updateusuario2.value.genero,
        direccion1: this.updateusuario2.value.direccion1,
        politicamente_expuesta: this.politicamente_expuesta,
        nombre_politico: this.nombre_politico,
        institucion_politica: this.institucion_politica,
        cargo_politico: this.cargo_politico,
      }
      console.log(
        'datainvestrealperuappcompletandoregistro:',
        datainvestrealperuappcompletandoregistro
      )
      this.varios.MostrarYOcultarAlertaMono('present')
      this.varios
        .variasfunciones(datainvestrealperuappcompletandoregistro)
        .subscribe(async (res: any) => {
          this.varios.MostrarYOcultarAlertaMono('dismiss')
          if (res && res.id && res.id > 0) {
            this.varios.MostrarYOcultarAlertaMono('dismiss')
            this.varios.tipo_cuenta = res.tipo_cuenta
            localStorage.setItem(
              'profileInfo',
              this.encrypt(JSON.stringify(res))
            )
            // this.menu.enable(true);
            if (res.tipo_cuenta == '1') {
              this.router.navigate(['indash/operacion'])
            }
            if (res.tipo_cuenta == '0') {
              this.router.navigate(['registrar', { step: '1' }])
            }
          }

          console.log(' respuesta datainvestrealperuappcompletandoregistro ', res)
        })
    } else {
      console.log('Formulario invalido')
    }
  }

  encrypt(value: string): string {
    if (value) {
      return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString()
    }
  }

  decrypt(textToDecrypt: string) {
    if (textToDecrypt) {
      return CryptoJS.AES.decrypt(
        textToDecrypt,
        this.secretKey.trim()
      ).toString(CryptoJS.enc.Utf8)
    }
  }
  cambioterminos() {
    console.log('terminos esta:,', this.aceptaterminos)
  }

  ionViewWillLeave() {
    window.location.reload()
  }

  IONCHANGEpoliticamente(event) {
    console.log('event.detail.checked', event.detail.checked)
    if (event.detail.checked == true) {
      this.abrir_modal_politico()
    }
  }

  async abrir_modal_politico() {
    const modal = await this.modalController.create({
      component: PersonapoliticaPage,
      cssClass: 'agregaralgo',
      componentProps: {
        dataparaelmodal: this.profileInfo,
        que_creara: 'cuenta',
      },
    })
    modal.onDidDismiss().then((data) => {
      console.log('data.data.respuesta_de_modal', data.data.respuesta_de_modal)
      if (
        data.data.nombre_politico &&
        data.data.institucion_politica &&
        data.data.cargo_politico
      ) {
        this.nombre_politico = data.data.nombre_politico
        this.institucion_politica = data.data.institucion_politica
        this.cargo_politico = data.data.cargo_politico
      } else {
        this.politicamente_expuesta = false
        this.el_toggle.checked = false
      }
    })
    return await modal.present()
  }

  ChangeEmpresa() {
    this.updateusuario1.value.es_empresa = this.es_empresa
  }


    // FILTROS de numeros flags
    abrir_modal_filtro_paises(){
      this.modal_filtro_paises.present();
    }

    cerrar_modal_filtro_paises(){
      this.modal_filtro_paises.dismiss();
    }

    searchbarInput(ev) {
      this.filterList(ev.target.value);
    }

    filterList(searchQuery: string | undefined) {
      if (searchQuery === undefined) {
        this.results = [...this.valores_codigos_banderas];
      } else {
        const normalizedQuery = searchQuery;
        this.results = this.valores_codigos_banderas.filter((item) => {
          return item['name'].toLowerCase().includes(normalizedQuery);

        });
        console.log('this.results',this.results)
      }
    }
  
    SetValueeexd(item){
      // this.selectionChange.emit(item);
      this.varios.pais_seleccionado_con_bandera=item;
      this.cerrar_modal_filtro_paises();
    }   
    // FILTROS de numeros flags
  
}
