import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public img: string
    public date: Date
    public usuario: User
    public tema: Tema
}