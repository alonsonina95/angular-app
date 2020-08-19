import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewVideoComponent } from './create-new-video.component';

describe('CreateNewVideoComponent', () => {
  let component: CreateNewVideoComponent;
  let fixture: ComponentFixture<CreateNewVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
