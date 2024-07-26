import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalManagementComponent } from './rental-management.component';

describe('RentalManagementComponent', () => {
  let component: RentalManagementComponent;
  let fixture: ComponentFixture<RentalManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
