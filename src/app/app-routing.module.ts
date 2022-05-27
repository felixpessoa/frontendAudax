import { BibliotecaUpdateComponent } from './components/biblioteca/biblioteca-update/biblioteca-update.component';
import { BibliotecaCreateComponent } from './components/biblioteca/biblioteca-create/biblioteca-create.component';
import { BibliotecarioDeleteComponent } from './components/bibliotecario/bibliotecario-delete/bibliotecario-delete.component';
import { BibliotecarioUpdateComponent } from './components/bibliotecario/bibliotecario-update/bibliotecario-update.component';
import { BibliotecarioCreateComponent } from './components/bibliotecario/bibliotecario-create/bibliotecario-create.component';
import { BibliotecarioCrudComponent } from './views/bibliotecario-crud/bibliotecario-crud.component';
import { LivroDeleteComponent } from './components/livro/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/livro/livro-update/livro-update.component';
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
  },
  {
    path:"livros/update/:id",
    component:LivroUpdateComponent
  },
  {
    path:"livros/delete/:id",
    component:LivroDeleteComponent
  },
  {
    path:"bibliotecarios",
    component:BibliotecarioCrudComponent
  },
  {
    path:"bibliotecarios/create",
    component:BibliotecarioCreateComponent
  },
  {
    path:"bibliotecarios/update/:id",
    component:BibliotecarioUpdateComponent
  },
  {
    path:"bibliotecarios/delete/:id",
    component:BibliotecarioDeleteComponent
  },
  {
    path:"biblioteca/create",
    component:BibliotecaCreateComponent
  },
  {
    path:"biblioteca/update/:id",
    component:BibliotecaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
