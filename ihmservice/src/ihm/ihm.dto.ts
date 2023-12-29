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
export class UpdateadminDTO{
    @IsNotEmpty()
    @IsNumber()
    admin_id: number;
}
export class CreatepostDTO{
    @IsNotEmpty()
    @IsNumber()
    post_id: number;

    @IsNotEmpty()
    @IsString()
    post_name: string;
    
    @Type(()=>Date)
    @IsDate()
    date: Date;
}
export class UpdatepostDTO{
    @IsNotEmpty()
    @IsNumber()
    post_id: number;

    @IsNotEmpty()
    @IsString()
    post_name: string;
    
    @Type(()=>Date)
    @IsDate()
    date: Date;
}
export class CreatecommentDTO{
    @IsNotEmpty()
    @IsNumber()
    comment_id: number;

    @Type(()=>Date)
    @IsDate()
    date: Date;
    
    @IsNotEmpty()
    @IsString()
    comment_name: string;
    
}
export class UpdatecommentDTO{
    @IsNotEmpty()
    @IsNumber()
    comment_id: number;

    @IsNotEmpty()
    @Type(()=>Date)
    @IsDate()
    date: Date;
    
    @IsNotEmpty()
    @IsString()
    comment_name: string;
    
}
export class UpdatenotificationDTO{
    @IsNotEmpty()
    @IsNumber()
    noti_id: number;

    @IsNotEmpty()
    @IsString()
    message: string;
}
export class CreateNotificationDTO{
    @IsNotEmpty()
    @IsNumber()
    noti_id: number;

    @IsNotEmpty()
    @IsString()
    message: string;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsNumber()
    admin_id: number;
}