import { Livro } from './livro.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = "https://audax-biblioteca.herokuapp.com/api/livros"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,  'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(this.baseUrl, livro)
  }

  read(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl)
  }

  readById(id: string): Observable<Livro> {
    const url = '${this.baseUrl}/${id}'
    return this.http.get<Livro>(url)
  }

  update(livro: Livro): Observable<Livro> {
    const url = '${this.baseUrl}/${id}'
    return this.http.put<Livro>(url, livro)
  }

}
