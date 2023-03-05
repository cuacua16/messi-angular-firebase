import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() enviarNombre = new EventEmitter();
  @Output() reset = new EventEmitter();

  enviar(nombre: string) {
    this.enviarNombre.emit(nombre);
  }
  noGracias() {
    this.reset.emit();
  }
}
