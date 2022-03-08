import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptimeComponent } from './aptime.component';

describe('AptimeComponent', () => {
  let component: AptimeComponent;
  let fixture: ComponentFixture<AptimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
