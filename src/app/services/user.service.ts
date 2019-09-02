import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { UserComponent } from '../components/user/user.component';


@Injectable({
  providedIn: 'root'
})
export class RutaService {
  
    selectedUser: User;
    users: User[];
    readonly URL_API = 'http://localhost:3000/user';
  

  constructor(private http: HttpClient) {
      this.selectedUser = new User();
   }

  getUsers(){ 
    return this.http.get(this.URL_API);
  }

  postUser(User: User){ 
    return this.http.post(this.URL_API, User);
  }

  putUser(user: User){ 
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}