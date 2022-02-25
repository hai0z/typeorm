import { Post } from "./post";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn } from "typeorm";
import { Photo } from "./photo";
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({ type: "boolean", default: false })
    isActive!: boolean;

    @OneToMany(() => Post, (posts: Post) => posts.user)
    posts!: Post[];

    @OneToMany(() => Photo, (photo: Photo) => photo.user)
    photos!: Photo[];
}
