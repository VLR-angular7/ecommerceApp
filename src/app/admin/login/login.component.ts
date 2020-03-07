import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userName:string;
password:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.userName=="admin" && this.password=="secret"){
      this.route.navigate(['/admin']);
    }
    else{
      alert("Please enter valid UserName or Password")
    }
  }

}
