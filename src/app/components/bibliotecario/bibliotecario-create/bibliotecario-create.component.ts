import { Usuario } from './../../account/usuario.model';
import { BibliotecaService } from './../../biblioteca/biblioteca.service';
import { Biblioteca } from './../../biblioteca/biblioteca.model';
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
    usuario: {
      login: '',
      password: '',
      admin: false
    }
  }
  bibliotecas:Biblioteca[]
  

  constructor(private bibliotecarioService: BibliotecarioService,
    private router: Router, private bibliotecaservice: BibliotecaService) { }

  ngOnInit(): void {
    this.bibliotecaservice.read().subscribe(biblioteca => {
      this.bibliotecas = biblioteca
      
      console.log(biblioteca)
    })
  }

  createBibliotecario(): void {
    
    console.log(JSON.stringify(this.bibliotecario))
    this.bibliotecarioService.create(this.bibliotecario).subscribe(() =>{
      this.bibliotecarioService.showMessage('Prestador salvo com sucesso!')
        this.router.navigate(['/bibliotecarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/bibliotecarios'])
  }


  

}
