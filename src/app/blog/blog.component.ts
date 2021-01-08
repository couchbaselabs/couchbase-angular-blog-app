import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  private sid: string;
  public input: any;

  public constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location) {
    this.input = {
      'title': '',
      'content': ''
    };
  }

  public ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sid = params['sid'];
    });
  }

  public save() {
    if (this.input.title && this.input.content) {
      let headers = new HttpHeaders({
        'content-type': 'application/json',
        'authorization': 'Bearer ' + this.sid
      });
      this.http.post('http://localhost:3000/blog', JSON.stringify(this.input), { headers: headers })
        .subscribe(() =>
          this.location.back()
        );
    }
  }

}
