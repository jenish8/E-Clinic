import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedorderComponent } from './medorder.component';

describe('MedorderComponent', () => {
  let component: MedorderComponent;
  let fixture: ComponentFixture<MedorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
