import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import User from "./user";


@Entity()
export default class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    title: string;

    @Column()
    date: Date;

    @ManyToOne(() => User)
    users: User;

    @OneToMany(() => Post, (post) => post.parent)
    comments: Post[];

    @ManyToOne(()=> Post, (post) => post.comments)
    parent : Post


}