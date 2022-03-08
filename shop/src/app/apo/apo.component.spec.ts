import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoComponent } from './apo.component';

describe('ApoComponent', () => {
  let component: ApoComponent;
  let fixture: ComponentFixture<ApoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
