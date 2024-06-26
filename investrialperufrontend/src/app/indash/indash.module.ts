import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndashPageRoutingModule } from './indash-routing.module';

import { IndashPage } from './indash.page';
import { TawkChatComponent } from '../tawk-chat/tawk-chat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndashPageRoutingModule
  ],
  declarations: [IndashPage, TawkChatComponent]
})
export class IndashPageModule {}
