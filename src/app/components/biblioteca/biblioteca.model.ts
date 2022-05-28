import { Livro } from './../livro/livro.model';
import { Bibliotecario } from './../bibliotecario/bibliotecario.model';
export interface Biblioteca {
    id?: number
    nome: string
    dataCadastro?: Date
    bibliotecarios?: Bibliotecario[]
    livros?: Livro[]

}