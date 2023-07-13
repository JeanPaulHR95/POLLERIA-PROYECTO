import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRegComponent } from './personal-reg.component';

describe('PersonalRegComponent', () => {
  let component: PersonalRegComponent;
  let fixture: ComponentFixture<PersonalRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
