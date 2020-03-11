import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : any = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.postsService.getPosts().subscribe((res: any)=>{
      this.posts=res;
      console.log(res);
    })
  }

}
