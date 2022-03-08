import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaddComponent } from './newadd.component';

describe('NewaddComponent', () => {
  let component: NewaddComponent;
  let fixture: ComponentFixture<NewaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
