import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  @Output() sesionEliminar: EventEmitter<any> = new EventEmitter<any>()
  @Output() sesionEditar: EventEmitter<any> = new EventEmitter<any>()

  @Input() accounts: any = []
  @Input() cards: any = []
  constructor() {}

  emitSesionEliminar(value1: any, value2: any): void {
    this.sesionEliminar.emit({ value1, value2 })
  }
  emitSesionEditar(value1: any, value2: any): void {
    this.sesionEditar.emit({ value1, value2 })
  }

  ngOnInit() {}
}
