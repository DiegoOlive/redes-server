import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Area from "./areas";
//import Image from "./image";

//interliga ao banco
@Entity('membros')
class Membros{
    @PrimaryGeneratedColumn('increment')
    id?: number;
    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    email: string;
    @Column()
    phone: number;
    @Column()
    senha: string;
    @Column()
    confSenha: string;
    @Column()
    course: string;
    @Column()
    degree: string;
    @Column()
    nivel: string;
    @Column()
    motivation: string;  
    
    @OneToMany(()=>Area, area => area.membros, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name:'membro_id'})
    areas: Area[] //nome que sera passado DAO

    /* Op. para imagem
    @OneToOne(() => Image, {
        cascade: ['insert', 'update'] 
    })
    @JoinColumn({name:'image_id'})
    photo: Image //nome que sera passado DAO
    */
}

export default Membros;