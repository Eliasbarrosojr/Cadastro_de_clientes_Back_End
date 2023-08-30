import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovePassword1691175846763 implements MigrationInterface {
    name = 'RemovePassword1691175846763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying NOT NULL`);
    }

}
