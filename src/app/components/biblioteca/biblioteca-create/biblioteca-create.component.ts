import { Router } from '@angular/router';
import { BibliotecaService } from './../biblioteca.service';
import { Biblioteca } from './../biblioteca.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca-create',
  templateUrl: './biblioteca-create.component.html',
  styleUrls: ['./biblioteca-create.component.css']
})
export class BibliotecaCreateComponent implements OnInit {

  biblioteca: Biblioteca = {
    nome: ''/*  */
  }

  constructor(private bibliotecaService: BibliotecaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createBiblioteca():void {
    this.bibliotecaService.create(this.biblioteca).subscribe(() =>{
      this.bibliotecaService.showMessage('Biblioteca salva com sucesso!')
        this.router.navigate([''])
    })
  }

  cancel(): void {
    this.router.navigate([''])
  }

}
