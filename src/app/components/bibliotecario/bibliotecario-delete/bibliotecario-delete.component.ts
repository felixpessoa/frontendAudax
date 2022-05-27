import { Router, ActivatedRoute } from '@angular/router';
import { BibliotecarioService } from './../bibliotecario.service';
import { Bibliotecario } from './../bibliotecario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliotecario-delete',
  templateUrl: './bibliotecario-delete.component.html',
  styleUrls: ['./bibliotecario-delete.component.css']
})
export class BibliotecarioDeleteComponent implements OnInit {

  bibliotecario: Bibliotecario

  constructor( 
    private bibliotecarioService: BibliotecarioService,
    private router: Router,
    private route: ActivatedRoute
   ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.bibliotecarioService.readById(id).subscribe(bibliotecario => {
      this.bibliotecario = bibliotecario
      console.log(JSON.stringify(bibliotecario))
      console.log(JSON.stringify(this.bibliotecario))
    });
  }

  deleteBibliotecario():void {
    this.bibliotecarioService.delete(this.bibliotecario.id).subscribe(() => {
      this.bibliotecarioService.showMessage('Prestador excluido com sucesso!')
      this.router.navigate(['/bibliotecarios']);
    })
  }

  cancel():void {
    this.router.navigate(['/bibliotecarios']);
  }

}
