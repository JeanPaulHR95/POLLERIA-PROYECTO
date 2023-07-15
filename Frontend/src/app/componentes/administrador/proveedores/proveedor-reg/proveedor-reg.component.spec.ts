import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorRegComponent } from './proveedor-reg.component';

describe('ProveedorRegComponent', () => {
  let component: ProveedorRegComponent;
  let fixture: ComponentFixture<ProveedorRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
