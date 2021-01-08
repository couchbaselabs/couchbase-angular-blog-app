import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {

  private sid: string;
  public entries: any; 

  public constructor(
    private http: HttpClient, 
    private router: Router, 
    private route: ActivatedRoute
  ) {
    this.entries = [];
  }

  public ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sid = params['sid'];
      let headers = new HttpHeaders({ 'authorization': 'Bearer ' + params['sid'] });
      this.http.get('http://localhost:3000/blogs', { headers: headers })
        .subscribe(result => {
          this.entries = result;
          console.log(result)
        });
    });
  }

  public create() {
    this.router.navigate(['/blog'], { 'queryParams': { 'sid': this.sid } });
  }

}
