import { Biblioteca } from './../biblioteca/biblioteca.model';
export interface Bibliotecario {
    id?: number
    nome: string
    dataCriacao?: Date
    bibliotecas?: Biblioteca[]
    status?: string
    usuario: {
        login:string,
        password:string
        admin?:boolean
    }

}