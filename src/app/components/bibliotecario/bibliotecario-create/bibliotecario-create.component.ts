import { BibliotecarioService } from './../bibliotecario.service';
import { Bibliotecario } from './../bibliotecario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliotecario-create',
  templateUrl: './bibliotecario-create.component.html',
  styleUrls: ['./bibliotecario-create.component.css']
})
export class BibliotecarioCreateComponent implements OnInit {

  bibliotecario: Bibliotecario = {
    nome: '',
    bibliotecas: null,
    status: '',
    admin: null
  }

  constructor(private bibliotecarioService: BibliotecarioService) { }

  ngOnInit(): void {
  }

  createBibliotecario(): void {

  }

  cancel(): void {

  }

}
