import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-management',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './item-management.component.html',
  styleUrl: './item-management.component.css'
})
export class ItemManagementComponent {

  public itemObj = {
    id: "",
    name: "",
    rentalPerDay: "",
    finePerDay: "",
    qty: ""
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

      }
    )
  }




}
