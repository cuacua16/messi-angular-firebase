import { Component } from '@angular/core';
import { User } from './models/user.interface';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  intervalo: any;
  timeout: any;
  //styles
  messiState: string = 'rie';
  messiSize: string = 'medium';
  right: number = 45;
  bottom: number = 45;
  //numbers
  puntaje = 0;
  gambetas = 0;
  puntajeMinimo = 0;
  velocidad = 800;
  //booleans
  noIniciado = true;
  pausado = false;
  blockClick = false;
  dialog = false;
  mejoresPuntajes = false;
  finalizado = false;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.getPuntajes().subscribe((users: User[]) => {
      let arrP = users
        .filter((u) => u.puntaje < 100)
        .sort((a, b) => b.puntaje - a.puntaje)
        .slice(0, 10);
      if (arrP[9].puntaje) this.puntajeMinimo = arrP[9].puntaje;
    });
  }

  iniciarJuego() {
    this.noIniciado = false;
    this.randomPosition();
  }

  fin() {
    clearInterval(this.intervalo);
    clearTimeout(this.timeout);
    this.finalizado = true;
    if (this.puntaje > this.puntajeMinimo) this.dialog = true;
    else this.dialog = false;
  }

  reset() {
    location.reload();
  }

  quitarPelota() {
    if (this.blockClick) return;
    this.blockClick = true;
    this.puntaje++;
    this.velocidad -= this.velocidad > 650 ? 20 : this.velocidad > 580 ? 10 : 5;
    this.messiState = 'llora';
    clearInterval(this.intervalo);
    clearTimeout(this.timeout);
    this.messiSize = 'large';

    setTimeout(() => {
      this.messiState = 'rie';
      this.messiSize = 'medium';
      this.randomPosition();
    }, 1500);
  }

  randomPosition(): any {
    this.intervalo = setInterval(() => {
      console.log(this.gambetas, this.finalizado);
      if (this.gambetas > 99 || this.puntaje > 99) {
        return this.fin();
      }
      this.messiSize = 'small';
      this.timeout = setTimeout(() => {
        this.messiSize = 'medium';
        this.blockClick = false;
        this.gambetas++;
      }, 200);
      this.right = Math.floor(Math.random() * 87);
      this.bottom = Math.floor(Math.random() * 87);
    }, this.velocidad);
  }

  pause() {
    clearInterval(this.intervalo);
    clearTimeout(this.timeout);
    this.blockClick = true;
    this.pausado = !this.pausado;
    if (!this.pausado) this.randomPosition();
  }

  verPuntajes() {
    this.mejoresPuntajes = true;
  }

  createUser(nombre: string) {
    this.firestoreService
      .createPuntaje({ nombre, puntaje: this.puntaje })
      .then(() => {
        location.reload();
      })
      .catch((e) => console.log('Failed to create', e));
  }
}
