import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public input: any;

  public constructor(private http: HttpClient, private router: Router) {
    this.input = {
      'firstname': '',
      'lastname': '',
      'email': '',
      'password': ''
    };
  }

  ngOnInit(): void { }

  public register() {
    if (this.input.email && this.input.password) {
      let headers = new HttpHeaders({ 'content-type': 'application/json' });
      this.http.post('http://localhost:3000/account', JSON.stringify(this.input), { headers: headers })
        .subscribe(() =>
          this.router.navigate(['/login'])
        );
    }
  }

}
