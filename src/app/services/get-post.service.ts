import { Post } from '../models/post.interface';
import { Injectable } from '@angular/core';
import { getSafePropertyAccessString } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];


  constructor() { }

  getposts() {
    return (fetch('http://localhost:3000/posts')).then((res): Promise<Post[]> => res.json())
  }

  fetchData() {
    let p = this.getposts()
    p.then(res => {
      this.posts = res
    });
  }

  getPostFiltrati(active: boolean): Post[] {
    let newArray = this.posts.filter((e) => { return e.active == active });
    return newArray;
  }

  switchDB(id: number) {
    let postAttivato = this.posts.find((e) => e.id == id)

    postAttivato!.active = !postAttivato!.active;

    return fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postAttivato)
    })
  }

  getPost(id:number){
    return fetch
    // this.users.find(users => users.id == id )
  }

}




// import { Post } from "../models/post.interface";

// export async function getPost():Promise<Post[]>{
//   ;
// }

// // export async function updatePost(data: Partial<Post>, id: number){
// //   return  fetch('../assets/data/db.json', {
// //     method: 'PUT',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(data),
// //   })
// // }


