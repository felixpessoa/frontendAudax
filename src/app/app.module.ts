import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LivroReadComponent } from './components/livro/livro-read/livro-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LivroUpdateComponent } from './components/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/livro/livro-delete/livro-delete.component';
import { BibliotecarioCrudComponent } from './views/bibliotecario-crud/bibliotecario-crud.component';
import { BibliotecarioCreateComponent } from './components/bibliotecario/bibliotecario-create/bibliotecario-create.component';
import { BibliotecarioReadComponent } from './components/bibliotecario/bibliotecario-read/bibliotecario-read.component';
import { BibliotecarioUpdateComponent } from './components/bibliotecario/bibliotecario-update/bibliotecario-update.component';
import { BibliotecarioDeleteComponent } from './components/bibliotecario/bibliotecario-delete/bibliotecario-delete.component';
import { BibliotecaCreateComponent } from './components/biblioteca/biblioteca-create/biblioteca-create.component';
import { BibliotecaCrudComponent } from './views/biblioteca-crud/biblioteca-crud.component';
import { BibliotecaReadComponent } from './components/biblioteca/biblioteca-read/biblioteca-read.component';
import { BibliotecaUpdateComponent } from './components/biblioteca/biblioteca-update/biblioteca-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LivroCrudComponent,
    LivroCreateComponent,
    LivroReadComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    BibliotecarioCrudComponent,
    BibliotecarioCreateComponent,
    BibliotecarioReadComponent,
    BibliotecarioUpdateComponent,
    BibliotecarioDeleteComponent,
    BibliotecaCreateComponent,
    BibliotecaCrudComponent,
    BibliotecaReadComponent,
    BibliotecaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
