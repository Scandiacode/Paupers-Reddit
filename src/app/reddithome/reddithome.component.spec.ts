import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReddithomeComponent } from './reddithome.component';

describe('ReddithomeComponent', () => {
  let component: ReddithomeComponent;
  let fixture: ComponentFixture<ReddithomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReddithomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReddithomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
