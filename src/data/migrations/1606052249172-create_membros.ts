import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMembros1606052249172 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: "membros",
            columns: [
                {
                 name: 'id',
                 type: 'integer',
                 unsigned: true,
                 isPrimary: true,
                 isGenerated: true,
                 generationStrategy: 'increment'   
                },
                /*name, lastname, email, phone, senha, confSenha,
                 course,degree(Mestrado),nivel(Avançado),motivation,areas*/
                {
                    name: 'name',
                    type: 'varchar'                        
                },
                {
                    name: 'lastname',
                    type: 'varchar'                        
                },
                {
                    name: 'email',
                    type: 'varchar'                        
                },
                {
                    name: 'phone',
                    type: 'integer'                        
                },
                {
                    name: 'senha',
                    type: 'varchar'                        
                },
                {
                    name: 'confSenha',
                    type: 'varchar'                        
                },
                {
                    name: 'course',
                    type: 'varchar'                        
                },
                {
                    name: 'degree',
                    type: 'varchar'                        
                },
                {
                    name: 'nivel',
                    type: 'varchar'                        
                },
                {
                    name: 'motivation',
                    type: 'varchar'                        
                },
                {
                    name: 'image_id',
                    type: 'integer'                        
                }               
            ],
            foreignKeys: [
                {
                name:'image_id',
                columnNames:['image_id'], //como array
                referencedTableName: 'images',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE' //membro deletado foto
                }                    
            ]
        }));
    }
/*areas e publicações(se tivesse) - não sao infos unicas - relacionamentos entre tabelas */
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('membros');
    }

}
