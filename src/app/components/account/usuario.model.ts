export interface Usuario {
    usuarioId?: number
    login:string
    password:string
    admin?:boolean
    token?:string
}