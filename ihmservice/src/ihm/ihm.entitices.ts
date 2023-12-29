import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"

@Entity()
export class Notification{
    @PrimaryGeneratedColumn()
    noti_id: number;

    @Column()
    message: string;

    @ManyToMany(() => User, user => user.notifications)
    users: User[];

    @ManyToMany(() => Admin, admin => admin.notifications)
    admins: Admin[];
}

@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
    admin_id: number;

    @OneToMany(() => User,(user) => user.checkedByAdmin)
    checkedUsers: User[];
    
    @ManyToMany(() => User, user => user.notifyingAdmins )
    @JoinTable()
    notifiedUsers: User[];
    
    @ManyToMany(() => Notification, notification => notification.admins)
    @JoinTable()
    notifications:Notification;
}

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    post_id: number;

    @Column()
    post_name: string;

    @Column()
    date: Date;

    @ManyToOne(() => User,(user) => user.posts)
    users: User[];

    @OneToMany(() => Comment, (comment) => comment.posts)
    comments: Comment[];
}


@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    comment_id: number;

    @Column()
    date: Date;

    @ManyToOne(() => User, user => user.comment)
    users: User[];

    @ManyToOne(() => Post,(post) => post.comments)
    posts: Post[];
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

    @ManyToOne(() => Admin,(admin) => admin.checkedUsers)
    checkedByAdmin: Admin;
    
    @ManyToMany(() => Admin, admin => admin.notifiedUsers)
    notifyingAdmins: Admin[];
    
    @ManyToMany(() => Notification, notification => notification.users)
    notifications: Notification[];

    @OneToMany(() => Post,(post) => post.users)
    posts: Post[];

    @OneToMany(() => Comment, (comment) => comment.users)
    comment: Comment[];
}