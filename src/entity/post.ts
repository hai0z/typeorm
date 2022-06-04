import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinColumn } from "typeorm";
import { User } from "./user";
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    text!: string;

    @ManyToOne(() => User, (user) => user.posts)
    user!: User;
}
