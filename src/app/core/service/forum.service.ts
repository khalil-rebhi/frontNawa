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

    return this.http.post("http://127.0.0.1:1919/nawa/Post/add", forum, { headers });
  }

  getPost() {
    return this.http.get("http://127.0.0.1:1919/nawa/Post/show")
  }

  getComment() {
    return this.http.get("http://127.0.0.1:1919/nawa/Comment/show/")
  }

  addComment(comment: any, idPost: any) {

    const headers = { 'Content-Type': 'application/json' };

    return this.http.post("http://127.0.0.1:1919/nawa/Comment/add/" + idPost, comment, { headers })
  }

  like(idPost: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post("http://127.0.0.1:1919/nawa/Post/likePost/" + idPost, { headers })

  }

  dislike(idPost: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post("http://127.0.0.1:1919/nawa/Post/disLikePost/" + idPost, { headers })

  }


  bestShow() {
    return this.http.get("http://127.0.0.1:1919/nawa/Post/showBest")
  }

  Tri() {
    return this.http.get("http://127.0.0.1:1919/nawa/Post/showTri")
  }

  deletePost(idPost: any) {
    return this.http.delete("http://127.0.0.1:1919/nawa/Post/delete/" + idPost)
  }

  deleteComment(idComment: any) {
    return this.http.delete("http://127.0.0.1:1919/nawa/Comment/delete/" + idComment)
  }

  getByid(id: any) {
    return this.http.get("http://127.0.0.1:1919/nawa/Post/show/" + id);
  }

  editPost(id: any, forum: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put("http://127.0.0.1:1919/nawa/Post/edit/" + id, forum, { headers });
  }

getCommentByPost(idPost:any){
  return this.http.get("http://127.0.0.1:1919/nawa/Comment/show/"+idPost);
}

editComment(id:any,text:any){
  const headers = { 'Content-Type': 'application/json' };

  return this.http.put("http://127.0.0.1:1919/nawa/Comment/edit/"+id,text,{headers});
}

deleteComm(id:any){
  return this.http.delete("http://127.0.0.1:1919/nawa/Comment/delete/"+id);
}
}
