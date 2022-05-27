import { Router } from '@angular/router';
import { BibliotecaService } from './../biblioteca.service';
import { Biblioteca } from './../biblioteca.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca-read',
  templateUrl: './biblioteca-read.component.html',
  styleUrls: ['./biblioteca-read.component.css']
})
export class BibliotecaReadComponent implements OnInit {

  bibliotecas: Biblioteca[]
  displayedColumns = ['id', 'nome', 'action']

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    this.bibliotecaService.read().subscribe(biblioteca => {
      this.bibliotecas = biblioteca
      console.log(biblioteca)
    })
  }



}
