import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  @Output() iniciarJuego = new EventEmitter();

  iniciar() {
    this.iniciarJuego.emit();
  }
}
