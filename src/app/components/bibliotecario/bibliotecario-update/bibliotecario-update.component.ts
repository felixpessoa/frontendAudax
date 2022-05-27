import { Router, ActivatedRoute } from '@angular/router';
import { BibliotecarioService } from './../bibliotecario.service';
import { Bibliotecario } from './../bibliotecario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliotecario-update',
  templateUrl: './bibliotecario-update.component.html',
  styleUrls: ['./bibliotecario-update.component.css']
})
export class BibliotecarioUpdateComponent implements OnInit {

  bibliotecario: Bibliotecario 

  constructor(
    private bibliotecarioService: BibliotecarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.bibliotecarioService.readById(id).subscribe(bibliotecario => {
      this.bibliotecario = bibliotecario
      console.log(JSON.stringify(bibliotecario))
      console.log(JSON.stringify(this.bibliotecario))
    });
  }

  updateBibliotecario():void {
    this.bibliotecarioService.update(this.bibliotecario).subscribe(() => {
      this.bibliotecarioService.showMessage('Funcionario Atualizado.')
      this.router.navigate(['/bibliotecarios']);
    })
  }

  cancel():void {
    this.router.navigate(['/bibliotecarios']);
  }

}
