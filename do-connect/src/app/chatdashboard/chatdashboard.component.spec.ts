import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdashboardComponent } from './chatdashboard.component';

describe('ChatdashboardComponent', () => {
  let component: ChatdashboardComponent;
  let fixture: ComponentFixture<ChatdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
