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
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

export default Membros;