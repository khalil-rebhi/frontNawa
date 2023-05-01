import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/core/service/forum.service';

@Component({
  selector: 'app-aaddforum',
  templateUrl: './aaddforum.component.html',
  styleUrls: ['./aaddforum.component.css']
})
export class AaddforumComponent implements OnInit {

  TextPost: any;
  selectedInput: any;
  showInp!: boolean;
  showBtn!: boolean;

  textComment: any;
  data: any = [].reverse();
  detPos: any = [];
  detCom: any = [];
  dataComment: any = [];
  idUser = 1;
  user: any = {
    "idUser": 1,
    "lastName": "client",
    "firstName": "client",
    "cin": 123456,
    "dateBirth": null,
    "phoneNumber": 23456784,
    "email": "client@gmail.com",
    "isEmployed": null,
    "isVerified": null,
    "role": "CLIENT",
    "account": null
  };

  idEdPost!: Number;
  constructor(private sr: ForumService) { }

  addForum() {
    let data: any = {
      text: this.TextPost,
      user: this.user
    }
    this.sr.addForum(data).subscribe((res) => {
      this.getPost();
      console.log(res);
    })
  }

  getPost() {
    this.sr.getPost().subscribe((res) => {
      this.data = res;
      //loop for get comment

      console.log(res);
    })
  }

  getComment() {
    this.sr.getComment().subscribe((res: any) => {
      this.dataComment = res;
      console.log(res);
    }
    )
  }
  addComment(idPost: any, textComment: any) {
    this.selectedInput = idPost;

    let data: any = {
      "text": textComment,
      user: this.user
    }

    this.sr.addComment(data, idPost).subscribe((res) => {
      this.getComment();
      console.log(res);
    });
  }
  getCommentText(idPost: any): string {
    const comment = this.dataComment.find((c: { post: { idPost: any; }; }) => c.post.idPost === idPost);
    return comment ? comment.text : '';
  }

  dislike(idPost: any) {
    this.sr.dislike(idPost).subscribe((res) => {
      this.getPost();
      console.log(res);
    }
    )
  }


  likePost(idPost: any) {
    this.sr.like(idPost).subscribe((res) => {
      this.getPost();
      console.log(res);
    })
  }

  Tri() {
    this.sr.Tri().subscribe((res) => {
      this.data = res;
      console.log(res);
    }
    )
  }

  deletePost(idPost: any) {
    this.sr.deletePost(idPost).subscribe((res) => {
      this.getPost();
      console.log(res);
    }
    )
  }

  deleteComment(idComment: any) {
    this.sr.deleteComment(idComment).subscribe((res) => {
      this.getComment();
      console.log(res);
    }
    )
  }
  getByid(idPost: any) {
    this.idEdPost = idPost;
    console.log(idPost);
    this.showInp = true;
    this.sr.getByid(idPost).subscribe((res) => {
      this.detPos = res;
      this.TextPost = this.detPos.text;
      console.log(res);
    }
    )
  }
  idEdComment!: Number;
  getCommentByid(idCom: any) {
    this.idEdComment = idCom;
    this.showBtn = true;
    console.log(idCom);
    this.sr.getCommentByPost(idCom).subscribe((res) => {
      this.detCom = res;
      this.textComment = this.detCom.text;
      console.log(res);
    }
    )


  }

  editComment() {
    console.log(this.idEdComment);
    this.sr.editComment(this.idEdComment, this.textComment).subscribe((res) => {
      this.getComment();
      console.log(res);
    }
    )
  }
  editPost() {
    console.log(this.idEdPost);


    this.sr.editPost(this.idEdPost, this.TextPost).subscribe((res) => {
      this.getPost();
      console.log(res);
    }
    )
  }


  deleteCom(idComment: any) {
    this.sr.deleteComment(idComment).subscribe((res) => {
      this.getComment();
      console.log(res);
    }
    )
  }
  ngOnInit(): void {
    this.showInp == false;

    this.getPost();
    this.getComment();
  }


}
