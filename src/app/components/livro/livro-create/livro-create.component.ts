import { Livro } from './../livro.model';
import { Router } from '@angular/router';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro = {
    nome: ''
  }

  constructor(private livroService: LivroService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createLivro(): void {
    this.livroService.create(this.livro).subscribe(() =>{
      this.livroService.showMessage('Livro salvo com sucesso!')
        this.router.navigate(['/livros'])
    })
  }

  cancel(): void {
    this.router.navigate(['/livros'])
  }


}
