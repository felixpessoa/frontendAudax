import { TokenReponse } from './tokenReponse.model';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateAccountComponent } from './create-account/create-account.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:8090/api/usuario/auth"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  async login(tokenReponse : TokenReponse) {
    //  this.http.post<any>(`${this.baseUrl}`, user).subscribe()

    const url = await this.http.post<TokenReponse>(`${this.baseUrl}`,tokenReponse).toPromise();
    if (url && url.token) {
      window.localStorage.setItem('token', url.token);
      return true
    }

    return false;
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve;
    });
  }



}
