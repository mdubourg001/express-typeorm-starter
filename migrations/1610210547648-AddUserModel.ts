import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserModel1610210547648 implements MigrationInterface {
    name = 'AddUserModel1610210547648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "isStaff" boolean NOT NULL DEFAULT (0), "username" varchar NOT NULL, "password" varchar, "email" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
