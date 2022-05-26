import { Livro } from './../livro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  livro: Livro

  constructor(private livroService: LivroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.livroService.readById(id).subscribe( livro => {
      this.livro = livro
    });
  }

  updateLivro(): void {

  }

  cancel(): void {
    this.router.navigate(['/livros'])
  }

}
