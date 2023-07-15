import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorMenuComponent } from './proveedor-menu.component';

describe('ProveedorMenuComponent', () => {
  let component: ProveedorMenuComponent;
  let fixture: ComponentFixture<ProveedorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
