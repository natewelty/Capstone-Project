import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendinganswerComponent } from './pendinganswer.component';

describe('PendinganswerComponent', () => {
  let component: PendinganswerComponent;
  let fixture: ComponentFixture<PendinganswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendinganswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendinganswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
