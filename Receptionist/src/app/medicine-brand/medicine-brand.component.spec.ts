import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineBrandComponent } from './medicine-brand.component';

describe('MedicineBrandComponent', () => {
  let component: MedicineBrandComponent;
  let fixture: ComponentFixture<MedicineBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
