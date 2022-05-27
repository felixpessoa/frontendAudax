import { BibliotecarioService } from './../bibliotecario.service';
import { Bibliotecario } from './../bibliotecario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliotecario-read',
  templateUrl: './bibliotecario-read.component.html',
  styleUrls: ['./bibliotecario-read.component.css']
})
export class BibliotecarioReadComponent implements OnInit {

  bibliotecarios: Bibliotecario[]
  displayedColumns = ['id', 'nome', 'dataCriacao', 'action']

  constructor(private bibliotecarioService: BibliotecarioService) { }

  ngOnInit(): void {
    this.bibliotecarioService.read().subscribe(bibliotecario => {
      this.bibliotecarios = bibliotecario
      console.log(bibliotecario)
    })
  }

}
