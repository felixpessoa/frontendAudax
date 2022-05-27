import { Router, ActivatedRoute } from '@angular/router';
import { Biblioteca } from './../biblioteca.model';
import { BibliotecaService } from './../biblioteca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca-update',
  templateUrl: './biblioteca-update.component.html',
  styleUrls: ['./biblioteca-update.component.css']
})
export class BibliotecaUpdateComponent implements OnInit {

  biblioteca: Biblioteca
  livros: any[] = new Array
  nomeLivro = [];

  livro = 'Livro Teste;'

  constructor(
    private bibliotecaService: BibliotecaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.bibliotecaService.readById(id).subscribe(biblioteca => {
      this.biblioteca = biblioteca;
      this.nomeLivro = biblioteca.livros
      console.log(this.nomeLivro)



      console.log('biblioteca', this.biblioteca)

    });
  }

  updateBiblioteca(): void {
    this.bibliotecaService.update(this.biblioteca).subscribe(() => {
      this.bibliotecaService.showMessage('Empresa atualizado.')
      this.router.navigate(['/']);
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
