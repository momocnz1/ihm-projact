// import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
// import { UserService,AdminService, PostService, NotificationService, CommentService } from './ihm.service';
// import { User,Admin, post,Notification } from './ihm.entitices';
// import { CreateNotificationDTO, CreateadminDTO, CreatepostDTO, CreateuserDTO, UpdatenotificationDTO, UpdatepostDTO, UpdateuserDTO } from './ihm.dto';


// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get('status')
//   getStatus() : string{
//     return this.userService.getstatus();
//   }
//   @Get()
//   getIndex(@Req() request : Request): Promise<User[]> {
//     return this.userService.findAll();
//   }
//   @Get(':user_id')
//     getByid(@Param('user_id') user_id : number) : Promise<User>{
//         return this.userService.findOne(user_id)
//     }
//   @Put(":user_id")
//     updateUserById(@Param('user_id') user_id: number, @Body() updateuserDTO: UpdateuserDTO): Promise<User> {
//       return this.userService.update(user_id, updateuserDTO);
      
//   }
    
//   @Post()
//   postCreat(@Body() createuserDTO : CreateuserDTO): Promise<User>{
//     return this.userService.creat(createuserDTO)
//   }
//   @Delete(":user_id")
//   deleteuserById(@Param('user_id') user_id :number) : string{
//     this.userService.DeleteQuryBuilder(user_id)
//     return "OK,It's done."
//   }
// }

// @Controller('admin')
// export class AdminController{
//   constructor(private readonly adminService: AdminService) {}

//   @Get('status')
//   getStatus() : string{
//     return this.adminService.getstatus();
//   }
//   @Get()
//   getIndex(@Req() request : Request): Promise<Admin[]> {
//     return this.adminService.findAll();
//   }
//   @Get(':admin_id')
//     getByid(@Param('admin_id') admin_id : number) : Promise<Admin>{
//         return this.adminService.findOne(admin_id)
//     }
//   @Post()
//   postCreat(@Body() createadminDTO : CreateadminDTO): Promise<Admin>{
//     return this.adminService.creat(createadminDTO)
//   }
//   @Delete(":admin_id")
//   deleteuserById(@Param('user_id') admin_id :number) : string{
//     this.adminService.deleteQuryBuilder(admin_id)
//     return "OK,It's done."
//   }
// }

// @Controller('post')
// export class PostController {
//   constructor(private readonly postService: PostService) {}

//   @Get('status')
//   getStatus() : string{
//     return this.postService.getstatus();
//   }
//   @Get()
//   getIndex(@Req() request : Request): Promise<post[]> {
//     return this.postService.findAll();
//   }
//   @Get(':post_id')
//     getByid(@Param('post_id') post_id : number) : Promise<post>{
//         return this.postService.findOne(post_id)
//     }
//     @Put(':post_id')
//     updateAdmin(@Param('post_id') post_id: number, @Body() updatePostDTO: UpdatepostDTO): Promise<post> {
//       return this.postService.update(post_id, updatePostDTO);
//     }
    
//   @Post()
//   postCreat(@Body() createpostDTO : CreatepostDTO): Promise<post>{
//     return this.postService.createPost(createpostDTO)
//   }
//   @Delete(":post_id")
//   deleteuserById(@Param('post_id') post_id :number) : string{
//     this.postService.DeleteQuryBuilder(post_id)
//     return "OK,It's done."
//   }
// }

// @Controller('noti')
// export class NotificationController {
//   constructor(private readonly notificationService: NotificationService) {}

//   @Get('status')
//   getStatus() : string{
//     return this.notificationService.getstatus();
//   }
//   @Get()
//   getIndex(@Req() request : Request): Promise<Notification[]> {
//     return this.notificationService.findAll();
//   }
//   @Get(':noti_id')
//     getByid(@Param('noti_id') noti_id : number) : Promise<Notification>{
//         return this.notificationService.findOne(noti_id)
//     }
//   @Put(":noti_id")
//     updateUserById(@Param('noti_id') noti_id: number, @Body() updatenotificationDTO: UpdatenotificationDTO): Promise<Notification> {
//       return this.notificationService.update(noti_id, updatenotificationDTO);
//   }
//   @Post('create')
//   createNotification(@Body() createNotificationDTO: CreateNotificationDTO) {
//     return this.notificationService.createNotification(
//       createNotificationDTO.content,
//       createNotificationDTO.user_id,
//       createNotificationDTO.admin_id,
//     );
//   }
//   @Delete(":noti_id")
//   deleteuserById(@Param('noti_id') noti_id :number) : string{
//     this.notificationService.DeleteQuryBuilder(noti_id)
//     return "OK,It's done."
//   }
// }

// @Controller('comment')
// export class CommentController {
//   constructor(private readonly commentService: CommentService) {}

//   @Get('status')
//   getStatus() : string{
//     return this.commentService.getstatus();
//   }
//   @Get()
//   getIndex(@Req() request : Request): Promise<post[]> {
//     return this.commentService.findAll();
//   }
//   @Get(':comment_id')
//     getByid(@Param('comment_id') comment_id : number) : Promise<post>{
//         return this.commentService.findOne(comment_id)
//     }
//   @Put(":comment_id")
//     updateUserById(@Param('comment_id') comment_id: number, @Body() updatecommentDTO: UpdatepostDTO): Promise<post> {
//       return this.commentService.update(comment_id, updatecommentDTO);
//   }
    
//   @Post()
//   postCreat(@Body() createcommentDTO : CreatepostDTO): Promise<post>{
//     return this.commentService.create(createcommentDTO)
//   }
//   @Delete(":comment_id")
//   deleteuserById(@Param('comment_id') comment_id :number) : string{
//     this.commentService.DeleteQuryBuilder(comment_id)
//     return "OK,It's done."
//   }
// }