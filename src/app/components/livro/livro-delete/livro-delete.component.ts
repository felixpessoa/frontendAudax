import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  livro: Livro

  constructor(private livroService: LivroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.livroService.readById(id).subscribe(livro => {
      this.livro = livro
    })
  }

  deleteLivro(): void {
    this.livroService.delete(this.livro.id).subscribe(() => {
      this.livroService.showMessage('Livro excluido com sucesso!')
      this.router.navigate(['/livros'])
    })
  }

  cancel(): void {
    this.router.navigate(['/livros'])
  }

}
