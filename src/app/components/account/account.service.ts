import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "/api/usuario/auth"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: 'msg-error'
    })
  }

  async login(user : any) {
    //  this.http.post<any>(`${this.baseUrl}`, user).subscribe()

    const url = await this.http.post<any>(`${this.baseUrl}`,user).toPromise();
    if (url && url.token) {
      window.localStorage.setItem('token', url.token);
      return true
    }

    return false;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }


}
