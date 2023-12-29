import { IsNotEmpty } from 'class-validator'

export class CreateuserDTO{
    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    fname: string;

    @IsNotEmpty()
    lname: string;
    
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    phone: number;

    @IsNotEmpty()
    address: string;

}
export class UpdateuserDTO{
    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    fname: string;

    @IsNotEmpty()
    lname: string;
    
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    phone: number;

    @IsNotEmpty()
    address: string;

}
export class CreateadminDTO{
    @IsNotEmpty()
    admin_id: number;
}
export class UpdateadminDTO{
    @IsNotEmpty()
    admin_id: number;
}
export class CreatepostDTO{
    @IsNotEmpty()
    post_id: number;

    @IsNotEmpty()
    post_name: string;
    
    @IsNotEmpty()
    date: Date;
}
export class UpdatepostDTO{
    @IsNotEmpty()
    post_id: number;

    @IsNotEmpty()
    post_name: string;
    
    @IsNotEmpty()
    date: Date;
}
export class CreatecommentDTO{
    @IsNotEmpty()
    comment_id: number;

    @IsNotEmpty()
    date: Date;
}
export class UpdatecommentDTO{
    @IsNotEmpty()
    comment_id: number;

    @IsNotEmpty()
    date: Date;
}
export class UpdatenotificationDTO{
    @IsNotEmpty()
    noti_id: number;

    @IsNotEmpty()
    message: string;
}