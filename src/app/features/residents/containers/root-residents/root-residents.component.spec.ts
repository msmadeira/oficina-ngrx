import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootResidentsComponent } from './root-residents.component';

describe('RootResidentsComponent', () => {
  let component: RootResidentsComponent;
  let fixture: ComponentFixture<RootResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
