import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public erreur:String=""
  public registerForm: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    let registerFormControls = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z '.]*"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl("", [Validators.required,
      Validators.pattern("[A-Z][a-z '.]*"),
      Validators.minLength(2)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      password2: new FormControl("", [Validators.required, Validators.minLength(8)])
    }
    this.registerForm = formBuilder.group(registerFormControls)
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get password2() { return this.registerForm.get('password2') }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")
    if (token)
    this.router.navigateByUrl('/dashboard'); 
  }


  registerUser() {

    let data = this.registerForm.value
    this.http.post<any>("https://itbs-backend.herokuapp.com/user/register",data)
    .subscribe(
      (result) => {
       console.log(result)
       this.router.navigateByUrl('/login'); // on peut utiliser aussi navigate pour passer des données
      },
      (error) => { console.log(error) 
        this.erreur="Problem occured"
      }
    )
  }

  
}
