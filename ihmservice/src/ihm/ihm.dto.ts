import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateuserDTO{
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsNotEmpty()
    @IsString()
    lname: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    address: string;

}
export class UpdateuserDTO{
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsNotEmpty()
    @IsString()
    lname: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    address: string;

}
export class CreateadminDTO{
    @IsNotEmpty()
    @IsNumber()
    admin_id: number;
}
export class CreatepostDTO{
    @IsNotEmpty()
    @IsNumber()
    post_id: number;

    @IsNotEmpty()
    @IsNumber()
    comment_id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
    
    @Type(()=>Date)
    @IsDate()
    date: Date;
}
export class UpdatepostDTO{
    @IsNotEmpty()
    @IsNumber()
    post_id: number;

    @IsNotEmpty()
    @IsNumber()
    comment_id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
    
    @Type(()=>Date)
    @IsDate()
    date: Date;
}
export class UpdatenotificationDTO{
    @IsNotEmpty()
    @IsNumber()
    noti_id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
    
    @Type(()=>Date)
    @IsDate()
    date: Date;
}
export class CreateNotificationDTO{
    @IsNotEmpty()
    @IsNumber()
    noti_id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
    
    @Type(()=>Date)
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsNumber()
    admin_id: number;
}