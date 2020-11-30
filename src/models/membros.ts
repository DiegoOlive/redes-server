/*mapeamento do typescript 
 inicializar ->  id: number = 0 ou
 constructor(id:number){
        this.id =id;
    }; ouu
"strictPropertyInitialization": false,
 */

/*habilit. 
"experimentalDecorators": true,
"emitDecoratorMetadata": true,  */
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Area from "./areas";
import Image from "./image";

@Entity('membros')
//interliga ao banco
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
    areas: Area[]; //nome que sera passado DAO

    @OneToOne(() => Image, {
        cascade: ['insert', 'update'] 
    })
    @JoinColumn({name:'image_id'})
    photo: Image //nome que sera passado DAO
}

export default Membros;