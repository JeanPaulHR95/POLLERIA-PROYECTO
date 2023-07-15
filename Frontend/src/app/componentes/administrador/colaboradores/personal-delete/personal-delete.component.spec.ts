import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDeleteComponent } from './personal-delete.component';

describe('PersonalDeleteComponent', () => {
  let component: PersonalDeleteComponent;
  let fixture: ComponentFixture<PersonalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
