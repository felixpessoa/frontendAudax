import { Router } from '@angular/router';
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

  constructor(private bibliotecarioService: BibliotecarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createBibliotecario(): void {
    this.bibliotecarioService.create(this.bibliotecario).subscribe(() =>{
      this.bibliotecarioService.showMessage('Funcionario salvo com sucesso!')
        this.router.navigate(['/bibliotecarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/bibliotecarios'])
  }

}
