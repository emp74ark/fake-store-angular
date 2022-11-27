import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AuthResponse, User } from "../shared/interfaces";
import {BASE_URL} from "./http.service.conf";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authenticated = false;
  public token = '';

  constructor(
    private http: HttpClient
  ) { }

  signup(user: User) {
    return this.http.post(`${BASE_URL}/users`, user)
      .pipe(
        tap((response) => console.log(response))
      );
  }

  signin(user: User) {
    return this.http.post<AuthResponse>(`${BASE_URL}/auth/login`, user);
  }

  signout() {
    this.authenticated = false;
  }

  delete(id: number) {
    return this.http.delete(`${BASE_URL}/users/${id}`)
  }

  update(id: number, user: User) {
    return this.http.patch(`${BASE_URL}/users/${id}`, user)
  }

  userInfo(id: number) {
    return this.http.get<User>(`${BASE_URL}/users/${id}`)
  }
}
