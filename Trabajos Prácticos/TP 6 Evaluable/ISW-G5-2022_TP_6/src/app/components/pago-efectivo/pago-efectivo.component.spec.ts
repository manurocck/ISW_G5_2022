import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEfectivoComponent } from './pago-efectivo.component';

describe('PagoEfectivoComponent', () => {
  let component: PagoEfectivoComponent;
  let fixture: ComponentFixture<PagoEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoEfectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
