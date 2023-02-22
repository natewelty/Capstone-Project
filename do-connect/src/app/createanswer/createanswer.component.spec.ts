import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateanswerComponent } from './createanswer.component';

describe('CreateanswerComponent', () => {
  let component: CreateanswerComponent;
  let fixture: ComponentFixture<CreateanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateanswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
