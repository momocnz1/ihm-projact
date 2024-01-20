import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import User from "./user";


@Entity()
export default class Admin extends User{

}