import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  lat = 33.892166;
  lng = 9.561555499999997;
  
  constructor() { }

  ngOnInit(): void {
  }

}
