import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionEntregaPageComponent } from './direccion-entrega-page.component';

describe('DireccionEntregaPageComponent', () => {
  let component: DireccionEntregaPageComponent;
  let fixture: ComponentFixture<DireccionEntregaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireccionEntregaPageComponent]
    });
    fixture = TestBed.createComponent(DireccionEntregaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
