import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaerComponent } from './caer.component';

describe('CaerComponent', () => {
  let component: CaerComponent;
  let fixture: ComponentFixture<CaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
