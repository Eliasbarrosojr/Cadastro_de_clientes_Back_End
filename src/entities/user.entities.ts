import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contact.entities";

export
@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 60 })
  name: string;

  @Column({ type: "varchar", length: 150, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: "integer" })
  phone: number;

  @CreateDateColumn()
  createdAt?: Date;

  @OneToMany(() => Contact, (contacts) => contacts.user)
  contacts: Contact[];
}
