import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresPuntajesComponent } from './mejores-puntajes.component';

describe('MejoresPuntajesComponent', () => {
  let component: MejoresPuntajesComponent;
  let fixture: ComponentFixture<MejoresPuntajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejoresPuntajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MejoresPuntajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
