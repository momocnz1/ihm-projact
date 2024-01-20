// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import {User,Admin,Notification,post} from './ihm.entitices'
// import { CreateuserDTO,UpdateuserDTO,CreateadminDTO, CreatepostDTO, UpdatepostDTO,UpdatenotificationDTO } from './ihm.dto';
// import { plainToClass } from 'class-transformer';


// @Injectable()
// export class UserService {
//     getstatus() : string{
//       return "OK";
//     }
//     constructor(
//       @InjectRepository(User)
//       private userRepository : Repository<User>
//     ){}
//     findAll() : Promise<User[]>{
//       return this.userRepository.find();
//     }
//     findOne(user_id : number) : Promise<User | null>{
//       return this.userRepository.findOneBy({user_id:user_id});
//     }
//     creat(user : CreateuserDTO) : Promise<User | null>{
//       return this.userRepository.save(user);
//     }
//     async update(user_id: number, update : UpdateuserDTO) : Promise<User | null>{
//       const usertoUpdate = await this.userRepository.findOne({ where: { user_id: user_id } });
//       if (!usertoUpdate) {
//         throw new NotFoundException('User not found');
//       }
//       usertoUpdate.fname = update.fname;
//       usertoUpdate.lname = update.lname;
//       usertoUpdate.email = update.email;
//       usertoUpdate.phone = update.phone;
//       usertoUpdate.address = update.address;
//       return await this.userRepository.save(usertoUpdate);
//     }
//     async DeleteQuryBuilder(user_id : number) : Promise<void>{
//       await this.userRepository.delete({user_id:user_id})
//     }
// }

// @Injectable()
// export class AdminService{
//   constructor(
//     @InjectRepository(Admin)
//     private adminRepository : Repository<Admin>
//   ){}
//   getstatus() : string{
//     return "OK";
//   }
//   findAll() : Promise<Admin[]>{
//     return this.adminRepository.find();
//   }
//   findOne(admin_id: number): Promise<Admin | null> {
//     return this.adminRepository.findOne({ where: { admin_id: admin_id } });
//   }  
//   creat(admin : CreateadminDTO) : Promise<Admin | null>{
//     return this.adminRepository.save(admin);
//   }
//   async deleteQuryBuilder(admin_id: number): Promise<void> {
//     const adminToDelete = await this.adminRepository.findOne({ where: { admin_id: admin_id } });
  
//     if (!adminToDelete) {
//       throw new NotFoundException('Admin not found');
//     }
  
//     await this.adminRepository.remove(adminToDelete);
//     const deletedAdmin = await this.adminRepository.findOne({ where: { admin_id: admin_id } });
  
//     if (deletedAdmin) {
//       console.log('Admin deleted successfully');
//     } else {
//       console.log('Admin not found after deletion');
//     }
//   } 
// }

// @Injectable()
// export class PostService{
//   constructor(
//     @InjectRepository(post)
//     private postRepository : Repository<post>
//   ){}
//   getstatus() : string{
//     return "OK";
//   }
//   findAll() : Promise<post[]>{
//     return this.postRepository.find();
//   }
//   findOne(post_id : number) : Promise<post | null>{
//     return this.postRepository.findOneBy({post_id:post_id});
//   }
//   async createPost(createPostDTO: CreatepostDTO): Promise<post> {
//     const newPost = this.postRepository.create({
//       ...createPostDTO,
//       date: new Date(),
//     });
//     return await this.postRepository.save(newPost);
//   }
//   async update(post_id: number, update: UpdatepostDTO): Promise<post | null> {
//     const postToUpdate = await this.postRepository.findOne({ where: { post_id: post_id } });
  
//     if (!postToUpdate) {
//       throw new NotFoundException('Post not found');
//     }
  
//     postToUpdate.title = update.title;
  
//     return await this.postRepository.save(postToUpdate);
//   }
  
//   async DeleteQuryBuilder(post_id: number) : Promise<void>{
//     await this.postRepository.delete({post_id:post_id})
//   }
// }

// @Injectable()
// export class CommentService{
//   constructor(
//     @InjectRepository(post)
//     private commentRepository : Repository<post>
//   ){}
//   getstatus() : string{
//     return "OK";
//   }
//   findAll() : Promise<post[]>{
//     return this.commentRepository.find();
//   }
//   findOne(comment_id : number) : Promise<post | null>{
//     return this.commentRepository.findOneBy({comment_id:comment_id});
//   }
//   async create(commentDto: CreatepostDTO): Promise<post | null> {
//     const commentEntity = plainToClass(post, commentDto);

//     commentEntity.date = new Date();

//     return this.commentRepository.save(commentEntity);
//   }
//   async update(comment_id: number, update: UpdatepostDTO): Promise<post | null> {
//     const commentToUpdate = await this.commentRepository.findOne({ where: { comment_id: comment_id } });
  
//     if (!commentToUpdate) {
//       throw new NotFoundException('Comment not found');
//     }
//     commentToUpdate.date = update.date;
//     commentToUpdate.content = update.content;
    
//     return await this.commentRepository.save(commentToUpdate);
//   }
  
//   async DeleteQuryBuilder(comment_id: number) : Promise<void>{
//     await this.commentRepository.delete({comment_id:comment_id})
//   }
// }

// @Injectable()
// export class NotificationService {
//   constructor(
//     @InjectRepository(Notification)
//     private notificationRepository: Repository<Notification>,
//   ) {}
//   getstatus() : string{
//     return "OK";
//   }
//   findAll() : Promise<Notification[]>{
//     return this.notificationRepository.find();
//   }
//   findOne(noti_id : number) : Promise<Notification | null>{
//     return this.notificationRepository.findOneBy({noti_id:noti_id});
//   }
  
//   async update(noti_id: number, update: UpdatenotificationDTO): Promise<Notification | null> {
//     const notificationToUpdate = await this.notificationRepository.findOne({ where: { noti_id: noti_id } });
  
//     if (!notificationToUpdate) {
//       throw new NotFoundException('Notification not found');
//     }
//     notificationToUpdate.content = update.content;
//     return this.notificationRepository.save(notificationToUpdate);
//   }
  
//   async DeleteQuryBuilder(noti_id: number) : Promise<void>{
//     await this.notificationRepository.delete({noti_id:noti_id})
//   }
//   async createNotification(mass: string, user_id: number, admin_id: number) {
//     const notification = this.notificationRepository.create({
//       content:  mass,
//       users: [{ user_id }],
//       admins: [{ admin_id }],
//     });

//     await this.notificationRepository.save(notification);
//     return notification; 
// }
// }
