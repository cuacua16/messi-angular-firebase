import { Component } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mejores-puntajes',
  templateUrl: './mejores-puntajes.component.html',
  styleUrls: ['./mejores-puntajes.component.scss'],
})
export class MejoresPuntajesComponent {
  users: User[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.getPuntajes().subscribe((users) => {
      let arrP = users
        .filter((u) => u.puntaje < 100)
        .sort((a, b) => b.puntaje - a.puntaje)
        .slice(0, 10);
      this.users = arrP;
    });
  }
}
