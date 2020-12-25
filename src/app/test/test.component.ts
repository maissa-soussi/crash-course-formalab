import { splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name: String = "maissa"
  public user = {
    firstname: "maissa",
    lastname: "soussi",
    age: 23
  }
  public technos: String[] = ["Angular", "Laravel", ".Net", "Vue", "Symphony"]
  public students: any[] = [
    {
      image: "https://cdn1.booknode.com/author_picture/1402/full/maissa-gargouri-1402000.jpg",
      username: "maissa",
      mail: "maissa.soussi@ensi-uma.tn",
      age: 23,
      university: "ENSI",
      isAdmis: true
    },

    {
      image: "https://i1.wp.com/www.lecourrierdelatlas.com/wp-content/uploads/2020/03/1143605279.jpg?resize=518%2C352&ssl=1",
      username: "kenza",
      mail: "kenza@gmail.tn",
      age: 21,
      university: "TBS",
      isAdmis: true
    },

    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Sinm-VuFVfGlHAL2dKS3aK-LHV1S3XC65Q&usqp=CAU",
      username: "achref",
      mail: "achref@gmail.tn",
      age: 28,
      university: "Université Centrale",
      isAdmis: false
    }
  ]

  public categoriesList: any[] = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
      .subscribe(
        (result) => { this.categoriesList = result },
        (error) => { console.log(error) }
      )
  }

  deleteStudent(std: any): void {
    console.log('DELETE works!')
    console.log(std)
    let indice = this.students.indexOf(std)
    this.students.splice(indice, 1)
  }

}
