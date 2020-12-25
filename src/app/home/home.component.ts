import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categories: any[] = [
    {
      id: 0,
      nom: "All"
    },
    {
      id: 1,
      nom: "Pcs"
    },
    {
      id: 2,
      nom: "Smartphones"
    },
    {
      id: 3,
      nom: "Tvs"
    }
  ]

  public products: any[] = [
    {
      categ: 1,
      model: "Dell",
      image: "assets/dell.jpg",
      prix: 1700,
      carac: "Processeur : Intel Core i5-1035G1 up to 3.6 Ghz - 6Mo de cache / Mémoire : 16Go DDR4 / Disque dur : 1To / Carte graphique : Nvidia GeForce MX230, 2 Go - GDDR5"
    },
    {
      categ: 1,
      model: "Asus",
      image: "assets/asus.jpg",
      prix: 2000,
      carac: "Ecran : 15.6 Full HD ( 1920 x 1080 pix), Processeur : Intel Core i5-9300H (up to 4.1 Ghz, 8 Mo), Carte Graphique : Nvidia GeForce Gtx 1650 4 Go, Mémoire Ram : 8 Go, Disque Dur : 512 Go SSD"
    },
    {
      categ: 1,
      model: "Lenovo",
      image: "assets/lenovo.jpg",
      prix: 900,
      carac: "(Ref:81D100BBFG, 81D100BCFG, 81D100BEFG), Ecran: 15.6 FHD, Cpu Intel Celeron N4000 dual-core (1.10 GHz Up To 2.60 GHz, 2 Cœurs, 2 threads, 4 Mo mémoires cache), Ram: 4"
    },
    {
      categ: 2,
      model: "Huawei",
      image: "assets/huawei.jpg",
      prix: 1200,
      carac: "Ecran:6.4, Android:EMUI 10.0.1, Processeur :HUAWEI Kirin 810, Mémoire vive (RAM):8 Go  / ROM: 128Go, caméra:48 MP + 8 MP+ 2MP+2MP / Selfie:16 MP / f/2.0"
    },
    {
      categ: 2,
      model: "Samsung",
      image: "assets/samsung.jpg",
      prix: 900,
      carac: "Couleur	Noir, Capacité de stockage	4 Go"
    }
  ]


  public productlist = this.products
  public categoriesList: any[] = []

  public productsList: any[] = []
  public listofproducts: any[] = []
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    //categories
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
      .subscribe(
        (result) => { this.categoriesList = result },
        (error) => { console.log(error) }
      )

    // products
    this.http.get<any>("https://itbs-backend.herokuapp.com/product/all")
      .subscribe(
        (result) => {
          this.productsList = result
          this.listofproducts = result
        },
        (error) => { console.log(error) }
      )

  }

  tri(id: number): void {
    id == 0 ? this.products = this.productlist :
      this.products = this.productlist.filter((element) => element.categ == id);
  }

  tri1(c: any): void {
    c.name == "all" ? this.productsList = this.listofproducts :
      this.productsList = this.listofproducts.filter((element) => element.category_id == c._id);
  }
}
