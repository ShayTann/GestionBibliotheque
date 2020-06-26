import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuccComponent } from './loginsucc.component';

describe('LoginsuccComponent', () => {
  let component: LoginsuccComponent;
  let fixture: ComponentFixture<LoginsuccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsuccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
