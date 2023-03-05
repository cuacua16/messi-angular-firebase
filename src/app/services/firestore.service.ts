import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  createPuntaje(user: User): Promise<any> {
    return this.firestore.collection('puntajes').add(user);
  }

  getPuntajes(): Observable<any> {
    return this.firestore.collection('puntajes').valueChanges();
  }
}
