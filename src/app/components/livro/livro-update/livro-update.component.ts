import { Livro } from './../livro.model';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  livro: Livro

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.livroService.readById(id).subscribe(livro => {
      this.livro = livro
      console.log(JSON.stringify(livro))
      console.log(JSON.stringify(this.livro))
    });

    console.log("sdasdfasdf" + id)
  }

  updateLivro(): void {
    this.livroService.update(this.livro).subscribe(() => {
      this.livroService.showMessage('Título do livro atualizado.')
      this.router.navigate(['/livros']);
    })
  }

  cancel(): void {
    this.router.navigate(['/livros'])
  }

  

}
