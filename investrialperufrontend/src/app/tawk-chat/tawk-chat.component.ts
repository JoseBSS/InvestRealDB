
import {Component, Inject, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tawk-chat',
  templateUrl: './tawk-chat.component.html',
  styleUrls: ['./tawk-chat.component.scss'],
})
export class TawkChatComponent implements OnInit {

  // @Input() id: string;
  script = this._renderer.createElement('script');

  // showButton: boolean = false;
  id: string = '1234asd1234asd1234asd1234asd'

  constructor(
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document,
  ) {}

  ngOnInit() {
    this.initializeChat()
  }

  async initializeChat() {
    this.script.text = `
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/${this.id}/1go0OFFFFe8';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();`;
    this._renderer.appendChild(this._document.body, this.script);
  }
}
