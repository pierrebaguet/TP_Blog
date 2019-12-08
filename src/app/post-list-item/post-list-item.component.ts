import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'postListItem',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postLoveIts : number;
  @Input() postDate: Date;
  
  status = 'neutre';

  constructor() {}

  getStatement(){
    if (this.postLoveIts < 0) {
      this.status = 'negative';
    } else if (this.postLoveIts > 0) {
      this.status = 'positive';
    } else {
      this.status = 'neutre';
    }
  }

  addLike(){
    this.postLoveIts ++;
    this.getStatement();
  }

  removeLike(){
    this.postLoveIts --;
    this.getStatement();
  }

  ngOnInit() {
  }

}
