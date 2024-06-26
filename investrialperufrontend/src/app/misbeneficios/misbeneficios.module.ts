import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { MisbeneficiosPageRoutingModule } from './misbeneficios-routing.module'

import { MisbeneficiosPage } from './misbeneficios.page'
import * as CryptoJS from 'crypto-js'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisbeneficiosPageRoutingModule,
  ],
  declarations: [MisbeneficiosPage],
})
export class MisbeneficiosPageModule {
  secretKey = '123456&Descryption'
  profileInfo: any = null

  constructor() {
    this.initializeApp()
  }

  async initializeApp() {
    this.profileInfo = localStorage.getItem('profileInfo')
    if (this.profileInfo) {
      // se Cumplio: ProfileInfo existe en el cache
      this.profileInfo = await this.decrypt(this.profileInfo)
    }
  }

  async decrypt(textToDecrypt: string): Promise<string> {
    if (textToDecrypt) {
      return await CryptoJS.AES.decrypt(
        textToDecrypt,
        this.secretKey.trim()
      ).toString(CryptoJS.enc.Utf8)
    }
  }
}
