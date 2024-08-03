import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule,HeaderComponent],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent {

  public customerObj = {
    id: "",
    name: "",
    city: "",
    contact: "",
  }

  public customerList: any;


  constructor(private http: HttpClient) {
    this.loadItemTable()
  }

  loadItemTable() {
    this.http.get("http://localhost:8080/customer/retrieveAll").subscribe(res => {
      this.customerList = res;
      console.log(res);
    })
  }


  addCustomer() {
    console.log(this.customerObj)
    this.http.post("http://localhost:8080/customer/persist", this.customerObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Employee added!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.loadItemTable()

      }
    )
  }

  deleteCustomer(customer : any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(customer)

        this.http.delete(`http://localhost:8080/customer/remove${customer.id}`, { responseType: 'text' }).subscribe(res => {
          this.loadItemTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);

        })
        console.log(customer);


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }


  updateCustomer(customer : any){
    if(customer != null){
      this.customerObj = customer;
    }
    
  }

  updateCustomerSave(item : any){
    this.http.put("http://localhost:8080/customer/update",this.customerObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Customer Updated!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.loadItemTable()
        console.log(data)
      }
    )
  }
}
