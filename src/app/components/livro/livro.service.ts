import { Livro } from './livro.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = "http://localhost:8090/api/livros"
  // baseUrl = "http://localhost:8090/api/livros"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.baseUrl, livro).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }



  read(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  readById(id: number): Observable<Livro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Livro>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/${livro.id}`;
    return this.http.put<Livro>(url, livro).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Livro> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Livro>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY
  }

}

