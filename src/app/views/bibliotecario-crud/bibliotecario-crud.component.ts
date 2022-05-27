import { HeaderService } from './../../components/template/footer/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliotecario-crud',
  templateUrl: './bibliotecario-crud.component.html',
  styleUrls: ['./bibliotecario-crud.component.css']
})
export class BibliotecarioCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Bibliotecario',
      icon:' badge',
      routeUrl:'/bibliotecarios'
    }
   }

  ngOnInit(): void {
  }

  navigateToBibliotecarioCreate():void {
    this.router.navigate(['/bibliotecarios/create'])
  }

}
