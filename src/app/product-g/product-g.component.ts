import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product-g',
  templateUrl: './product-g.component.html',
  styleUrls: ['./product-g.component.css','./../../assets/css/fichiercss.css']
})
export class ProductGComponent implements OnInit {
  public productsList: any[] = []
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/product/all")
      .subscribe(
        (result) => {
          this.productsList = result
         // this.listofproducts = result
        },
        (error) => { console.log(error) }
      )
  }

}
