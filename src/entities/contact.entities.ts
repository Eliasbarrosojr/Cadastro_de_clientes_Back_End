import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entities";

export
@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 60 })
  name: string;

  @Column({ type: "varchar", length: 150, unique: true })
  email: string;

  @Column({ type: "integer" })
  phone: number;

  @CreateDateColumn()
  createdAt?: Date;

  @ManyToOne(() => User)
  user: User;
}
