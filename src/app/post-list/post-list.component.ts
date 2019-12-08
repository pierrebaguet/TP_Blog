import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'postList',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() posts:any=[];

  ngOnInit() {
  }

}
