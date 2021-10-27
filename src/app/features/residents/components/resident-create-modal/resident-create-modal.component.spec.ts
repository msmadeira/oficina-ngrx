import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentCreateModalComponent } from './resident-create-modal.component';

describe('ResidentCreateModalComponent', () => {
  let component: ResidentCreateModalComponent;
  let fixture: ComponentFixture<ResidentCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
