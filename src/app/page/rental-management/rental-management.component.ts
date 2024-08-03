import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-rental-management',
  standalone: true,
  imports: [HeaderComponent,FormsModule, CommonModule,HttpClientModule],
  templateUrl: './rental-management.component.html',
  styleUrl: './rental-management.component.css'
})
export class RentalManagementComponent {

  public rentalDetailObjList : any;

  public rentalDetailObj = {
    id : null,
    rentalId : null,
    hardwareItemId : null,
    qty : null,
    totalCost : null
  }

  public rentalObj = {
    id : null,
    rentalDate : null,
    dueDate : null,
    returnDate : null,
    totalCost : null,
    fine : null,
    customerId : null
  }

  deleteRentalDetail(rentalDetailObj : any){}

  updateRentalDetail(rentalDetailObj : any){}

  addRental(){}

  updateRentalSave(customerObj : any){}

  deleteRental(customerObj : any){}

  addRentalDetail(){}



  rentalDetailList = [
    { id: '', rentalId: '1',hardwareItemId:'1',qty:'5',totalCost:'5000' },
    {id: '', rentalId: '1',hardwareItemId:'2',qty:'5',totalCost:'5000' },
    { id: '', rentalId: '1',hardwareItemId:'3',qty:'5',totalCost:'5000' }
  ]
}
