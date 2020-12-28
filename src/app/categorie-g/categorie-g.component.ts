import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-categorie-g',
  templateUrl: './categorie-g.component.html',
  styleUrls: ['./categorie-g.component.css','./../../assets/css/fichiercss.css']
})
export class CategorieGComponent implements OnInit {
  public categoriesList: any[] = []
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
      .subscribe(
        (result) => { this.categoriesList = result },
        (error) => { console.log(error) }
      )
  }

  
detailcategory(id: String)
{
  console.log(id)
}

}
