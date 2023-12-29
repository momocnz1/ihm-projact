import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { UserService } from './ihm.service';
import { User } from './ihm.entitices';
import { CreateuserDTO, UpdateuserDTO } from './ihm.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('status')
  getStatus() : string{
    return this.userService.getstatus();
  }
  @Get()
  getIndex(@Req() request : Request): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':user_id')
    getByid(@Param('user_id') user_id : number) : Promise<User>{
        return this.userService.findOne(user_id)
    }
  @Put(":user_id")
  updateUserById(@Param('user_id') user_id: number,@Body() updateuserDTO:UpdateuserDTO) : Promise<User>{
    return this.userService.update(updateuserDTO)
  }
  @Post()
  postCreat(@Body() createuserDTO : CreateuserDTO): Promise<User>{
    return this.userService.creat(createuserDTO)
  }
  @Delete(":user_id")
  deleteuserById(@Param('user_id') user_id :number) : string{
    this.userService.DeleteQuryBuilder(user_id)
    return "OK"
  }
}
  