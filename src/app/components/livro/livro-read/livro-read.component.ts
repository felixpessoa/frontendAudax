import { Livro } from './../livro.model';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livros: Livro[]
  displayedColumns = ['id', 'nome', 'action']

  constructor(private livroService: LivroService ) { }

  ngOnInit(): void {
    this.livroService.read().subscribe(livro => {
      this.livros = livro
      console.log(livro)
    })
  }

}
