import { map, catchError } from 'rxjs/operators';
import { Bibliotecario } from './bibliotecario.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecarioService {

  baseUrl = "https://audax-biblioteca.herokuapp.com/api/bibliotecarios"

  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(bibliotecario: Bibliotecario): Observable<Bibliotecario> {
    return this.http.post<Bibliotecario>(this.baseUrl, bibliotecario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Bibliotecario[]> {
    return this.http.get<Bibliotecario[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Bibliotecario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Bibliotecario>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(bibliotecario: Bibliotecario): Observable<Bibliotecario> {
    const url = `${this.baseUrl}/${bibliotecario.id}`;
    return this.http.put<Bibliotecario>(url, bibliotecario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Bibliotecario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Bibliotecario>(url).pipe(
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
