import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraInsumosComponent } from './compra-insumos.component';

describe('CompraInsumosComponent', () => {
  let component: CompraInsumosComponent;
  let fixture: ComponentFixture<CompraInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraInsumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});