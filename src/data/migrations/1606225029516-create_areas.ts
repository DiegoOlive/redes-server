import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAreas1606225029516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "areas",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'   
                   },
                   {
                    name: "name",
                    type: "varchar"
                   },
                   {
                    name: "membro_id",
                    type: "integer"
                   }
            ],
            //a chave do membro vai para as areas de interesse
            foreignKeys: [
                {
                name:'membro_id',
                columnNames:['membro_id'], //como array
                referencedTableName: 'membros',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE' //membro deletado areas tbm
                }                    
            ]  
        }));
    }    
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("areas");
    }
}
