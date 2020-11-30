import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Membros from "./membros";

//a quem ira se refenciar
@Entity("areas")

class Area{
    //referencia a chave primaria
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    name: string;

//relacionamentos

    @ManyToOne(()=>Membros, membros => membros.areas)
    @JoinColumn({name:'membro_id'})
    membros:Membros
}

export default Area;