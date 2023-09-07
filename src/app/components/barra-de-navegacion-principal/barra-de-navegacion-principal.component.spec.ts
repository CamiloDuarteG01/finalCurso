import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacionPrincipalComponent } from './barra-de-navegacion-principal.component';

describe('BarraDeNavegacionPrincipalComponent', () => {
  let component: BarraDeNavegacionPrincipalComponent;
  let fixture: ComponentFixture<BarraDeNavegacionPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraDeNavegacionPrincipalComponent]
    });
    fixture = TestBed.createComponent(BarraDeNavegacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
