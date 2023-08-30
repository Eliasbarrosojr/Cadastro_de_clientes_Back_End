import { MigrationInterface, QueryRunner } from "typeorm";

export class AltersUser1691158545194 implements MigrationInterface {
    name = 'AltersUser1691158545194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createData" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createdAt" TO "createData"`);
    }

}
