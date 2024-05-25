import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaEntregaPageComponent } from './fecha-entrega-page.component';

describe('FechaEntregaPageComponent', () => {
  let component: FechaEntregaPageComponent;
  let fixture: ComponentFixture<FechaEntregaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechaEntregaPageComponent]
    });
    fixture = TestBed.createComponent(FechaEntregaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
