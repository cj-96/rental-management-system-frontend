import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-item-management',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule,HeaderComponent],
  templateUrl: './item-management.component.html',
  styleUrl: './item-management.component.css'
})
export class ItemManagementComponent {

  public itemObj = {
    id: null,
    name: null,
    rentalPerDay: null,
    finePerDay: null,
    qty: null
  }

  public itemList: any;


  constructor(private http: HttpClient) {
    this.loadItemTable()
  }

  loadItemTable() {
    this.http.get("http://localhost:8080/hardwareItem/retrieveAll").subscribe(res => {
      this.itemList = res;
      console.log(res);
    })
  }


  addItem() {
    console.log(this.itemObj)
    this.http.post("http://localhost:8080/hardwareItem/persist", this.itemObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Employee added!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.loadItemTable()
        console.log(data)

      }
    )
  }


  deleteItem(item : any){
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
        console.log(item)

        this.http.delete(`http://localhost:8080/hardwareItem/remove${item.id}`, { responseType: 'text' }).subscribe(res => {
          this.loadItemTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);

        })
        console.log(item);


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


  updateItem(item : any){
    if(item != null){
      this.itemObj = item;
    }
    
  }

  updateItemSave(item : any){
    this.http.put("http://localhost:8080/hardwareItem/update",this.itemObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Employee Updated!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.loadItemTable()
        console.log(data)
      }
    )
  }



}
