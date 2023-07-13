import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComprasComponent } from './tabla-compras.component';

describe('TablaComprasComponent', () => {
  let component: TablaComprasComponent;
  let fixture: ComponentFixture<TablaComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
