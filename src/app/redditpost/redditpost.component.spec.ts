import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditpostComponent } from './redditpost.component';

describe('RedditpostComponent', () => {
  let component: RedditpostComponent;
  let fixture: ComponentFixture<RedditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
