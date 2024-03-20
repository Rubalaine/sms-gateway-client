import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { STORAGE } from 'src/app/shared/constants/storage.constants';
import { IUser } from 'src/app/shared/types/user-type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = environment.api;
  STORAGE = STORAGE;
  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${this.api}/login`, { username, password }).pipe(
      map((user: IUser) => {
        localStorage.setItem(this.STORAGE.USER, JSON.stringify(user));
        return user;
      })
    )
  }
  logout() {
    localStorage.removeItem(this.STORAGE.USER);
  }
  getUser(): IUser | null {
    const user = localStorage.getItem(this.STORAGE.USER);
    return user ? JSON.parse(user) : null;
  }
  isAuthenticated(): boolean {
    return !!this.getUser();
  }
  getToken(): string {
    const user = this.getUser();
    return user ? user.token : '';
  }
}
