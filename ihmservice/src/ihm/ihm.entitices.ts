import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"

@Entity()
export class Notification{
    @PrimaryGeneratedColumn()
    noti_id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    date: Date;

    @ManyToOne(() => User,(user) => user.notifications)
    users:User

    @ManyToOne(() => post,(post) => post.notifications)
    posts: post

    @ManyToOne(() => Admin,(admin) => admin.notifications)
    admins: Admin
}

@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
    admin_id: number;
    
    @OneToMany(() => Notification, notification => notification.admins)
    notifications:Notification;

    @OneToMany(() => post,(post) => post.admins)
    posts: post
}

@Entity()
export class post{
    @PrimaryGeneratedColumn()
    post_id: number;

    @Column()
    comment_id : number; 

    @Column()
    title: string;
    
    @Column()
    content: string;

    @Column()
    date: Date;

    @ManyToOne(() => User,(user) => user.userPosts)
    postUsers: User

    @ManyToOne(() => User,(user) => user.userComments)
    commentUsers: User

    @OneToMany(() => Notification,(notification)  => notification.posts)
    notifications: Notification

    @ManyToOne(() => Admin,(admin) => admin.posts)
    admins: Admin
    
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    fname: string;

    @Column()
    lname: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    address: string;

    @OneToMany(() => post,(post) => post.postUsers)
    userPosts: post

    @OneToMany(() => post,(post) => post.commentUsers)
    userComments: post

    @OneToMany(() => Notification,(notification) => notification.users)
    notifications :Notification
}