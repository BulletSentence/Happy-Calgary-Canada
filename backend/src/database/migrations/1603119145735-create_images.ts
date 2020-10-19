import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1603119145735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',    
                },
                {
                    name: 'orph_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'imageOrph',
                    columnNames: ['orph_id'],
                    referencedTableName: 'Orph',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
