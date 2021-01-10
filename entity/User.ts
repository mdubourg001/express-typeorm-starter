import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isStaff: boolean;

  @Column()
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  email: string;
}
