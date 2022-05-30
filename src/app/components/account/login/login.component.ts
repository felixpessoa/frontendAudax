import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    login: '',
    password: '',
  }

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit () {
    try{
      console.log(this.usuario)
      const result = await this.accountService.login(this.usuario);
      console.log(`login efetuado: ${result}`);

      this.router.navigate(['']);

    }catch (error){
      console.error(error);
      this.accountService.showMessage(error)
    }
  }

  navigateToBibliotecarioCreate():void {
    this.router.navigate(['/bibliotecarios/create'])
  }


}
