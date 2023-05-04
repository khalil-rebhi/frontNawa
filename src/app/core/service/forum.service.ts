import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '../model/forum';
@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }


  addForum(forum: Forum) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post("http://127.0.0.1:8089/nawa/post/add", forum, { headers });
  }

  getPost() {
    return this.http.get("http://127.0.0.1:8089/nawa/post/show")
  }

  getComment() {
    return this.http.get("http://127.0.0.1:8089/nawa/comment/show/")
  }

  addComment(comment: any, idPost: any) {

    const headers = { 'Content-Type': 'application/json' };

    return this.http.post("http://127.0.0.1:8089/nawa/comment/add/" + idPost, comment, { headers })
  }

  like(idPost: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post("http://127.0.0.1:8089/nawa/post/likePost/" + idPost, { headers })

  }

  dislike(idPost: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post("http://127.0.0.1:8089/nawa/post/disLikePost/" + idPost, { headers })

  }


  bestShow() {
    return this.http.get("http://127.0.0.1:8089/nawa/post/showBest")
  }

  Tri() {
    return this.http.get("http://127.0.0.1:8089/nawa/post/showTri")
  }

  deletePost(idPost: any) {
    return this.http.delete("http://127.0.0.1:8089/nawa/post/delete/" + idPost)
  }

  deleteComment(idComment: any) {
    return this.http.delete("http://127.0.0.1:8089/nawa/comment/delete/" + idComment)
  }

  getByid(id: any) {
    return this.http.get("http://127.0.0.1:8089/nawa/post/show/" + id);
  }

  editPost(id: any, forum: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put("http://127.0.0.1:8089/nawa/post/edit/" + id, forum, { headers });
  }

getCommentByPost(idPost:any){
  return this.http.get("http://127.0.0.1:8089/nawa/comment/show/"+idPost);
}

editComment(id:any,text:any){
  const headers = { 'Content-Type': 'application/json' };

  return this.http.put("http://127.0.0.1:8089/nawa/comment/edit/"+id,text,{headers});
}

deleteComm(id:any){
  return this.http.delete("http://127.0.0.1:8089/nawa/comment/delete/"+id);
}
}
