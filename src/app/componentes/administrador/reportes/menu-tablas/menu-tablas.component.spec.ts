import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTablasComponent } from './menu-tablas.component';

describe('MenuTablasComponent', () => {
  let component: MenuTablasComponent;
  let fixture: ComponentFixture<MenuTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTablasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
