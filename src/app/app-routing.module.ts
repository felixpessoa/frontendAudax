import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"livros",
    component:LivroCrudComponent
  },
  {
    path:"livros/create",
    component:LivroCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
