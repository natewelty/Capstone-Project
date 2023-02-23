import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingquestionComponent } from './pendingquestion.component';

describe('PendingquestionComponent', () => {
  let component: PendingquestionComponent;
  let fixture: ComponentFixture<PendingquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
