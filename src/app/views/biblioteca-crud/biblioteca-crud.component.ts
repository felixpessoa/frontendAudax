import { HeaderService } from './../../components/template/footer/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca-crud',
  templateUrl: './biblioteca-crud.component.html',
  styleUrls: ['./biblioteca-crud.component.css']
})
export class BibliotecaCrudComponent implements OnInit {

  constructor(
    private router:Router,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  navigateToBibliotecaCreate():void {
    this.router.navigate(['/biblioteca/create'])
  }

}
