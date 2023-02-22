import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayquestionComponent } from './displayquestion.component';

describe('DisplayquestionComponent', () => {
  let component: DisplayquestionComponent;
  let fixture: ComponentFixture<DisplayquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
