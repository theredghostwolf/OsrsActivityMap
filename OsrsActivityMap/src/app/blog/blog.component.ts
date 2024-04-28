import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  private path: string;
  public md: string;
  private ErrorMarkdown = "# Oops, File not found!";

  
  constructor (private route: ActivatedRoute, private markdownService: MarkdownService, private http: HttpClient) {

  }

 ngOnInit () {
  this.path = this.route.snapshot.paramMap.get('name') || "error" ;
    this.http.get('assets/markdown/' + this.path + '.md', {responseType: 'text'}).subscribe(data => {
        this.md = data;
     
    }, error => {
      this.md = this.ErrorMarkdown;
    });
  
 
}

}
