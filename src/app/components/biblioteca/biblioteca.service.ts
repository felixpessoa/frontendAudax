import { map, catchError } from 'rxjs/operators';
import { Biblioteca } from './biblioteca.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  baseUrl = "/api/bibliotecas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(biblioteca: Biblioteca): Observable<Biblioteca> {
    return this.http.post<Biblioteca>(this.baseUrl, biblioteca).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  read(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Biblioteca> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Biblioteca>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(biblioteca: Biblioteca): Observable<Biblioteca> {
    const url = `${this.baseUrl}/${biblioteca.id}`;
    return this.http.put<Biblioteca>(url, biblioteca).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Biblioteca> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Biblioteca>(url).pipe(
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
