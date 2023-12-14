import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDescriptionComponent } from './money-description.component';

describe('MoneyDescriptionComponent', () => {
  let component: MoneyDescriptionComponent;
  let fixture: ComponentFixture<MoneyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
