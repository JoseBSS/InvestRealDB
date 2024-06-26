import { Component, OnInit } from '@angular/core';
import { VariosService } from '../service/varios.service';
import * as CryptoJS from 'crypto-js';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ayudaycontacto',
  templateUrl: './ayudaycontacto.page.html',
  styleUrls: ['./ayudaycontacto.page.scss'],
})
export class AyudaycontactoPage implements OnInit {
  secretKey = "123456&Descryption";
  profileInfo: any = null;
  constructor(
    public varios: VariosService,
    private router: Router,




  )
  { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.AlogearDiferenteTipoCuenta();
    console.log('1');
  }


  AlogearDiferenteTipoCuenta(){
    this.profileInfo=localStorage.getItem('profileInfo');
  if(this.profileInfo){
    this.profileInfo=this.decrypt(this.profileInfo);
    this.profileInfo=JSON.parse(this.profileInfo);
      if(this.profileInfo&&this.profileInfo.id)
      console.log('profileInfo  PERO EN VISTA Alogear ',this.profileInfo);
      var datainvestrealperuappupdateporid = {
        nombre_solicitud:'investrealperuappupdateporid',
        id:this.profileInfo.id
      }
      this.varios.variasfunciones(datainvestrealperuappupdateporid).subscribe(async( res: any ) =>{
        console.log(' respuesta investrealperuappupdateporid PERO EN VISTA Alogear ',res);
          localStorage.setItem('profileInfo', this.encrypt(JSON.stringify(res)));
          if(res.tipo_cuenta<1){
            this.router.navigate(['login']);
          }
        });


    }
    else{
       this.router.navigate(['login']);
    }



}

async copiar(texto) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(texto);
    } catch (err) {}
  }
  this.varios.presentToast('Codigo de invitación copiado!')

}


encrypt(value : string) : string{
  if(value){
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }
}

decrypt(textToDecrypt : string){
  if(textToDecrypt){
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}

mailto(){
  var body = 'Consulta de: '+this.profileInfo.id_publico+'via Email';
 window.open("mailto:contacto@investrealperu.com?subject=Consulta de"+this.profileInfo.id_publico+" &body=Hola mi nombre es:"+this.profileInfo.name+"Me identifico con el codigo:"+this.profileInfo.id_publico+"Tengo una consulta: ");
}


  shareApp (name: string) {

    if (name === 'FACEBOOK') {
      window.open('tel:+51915157485')
    }
    if (name === 'TWITTER') {
      window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.investrealperu.app%26pcampaignid%3Dweb_share&via=GooglePlay&text=%C3%89chale%20un%20vistazo%20a%20%Investrial%20pe%22', '_blank')
    }
    if (name === 'WHATSAPP') {
      window.open('https://wa.me/51915157485?text=Hola, Quisiera realizar una consulta.  Mi codigo de usuario es '+this.profileInfo.id_publico+' Muchas gracias', '_blank')
    }
    if (name === 'EMAIL') {

//migrado a otra funcion
      
    }
  }
}
