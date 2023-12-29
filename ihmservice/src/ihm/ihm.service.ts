import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User,Admin,Notification,Post,Comment} from './ihm.entitices'
import { CreateuserDTO,UpdateuserDTO,CreateadminDTO, UpdateadminDTO, CreatepostDTO, UpdatepostDTO,UpdatecommentDTO,CreatecommentDTO,UpdatenotificationDTO } from './ihm.dto';


@Injectable()
export class UserService {
    getstatus() : string{
      return "OK";
    }
    constructor(
      @InjectRepository(User)
      private userRepository : Repository<User>
    ){}
    findAll() : Promise<User[]>{
      return this.userRepository.find();
    }
    findOne(user_id : number) : Promise<User | null>{
      return this.userRepository.findOneBy({user_id:user_id});
    }
    creat(user : CreateuserDTO) : Promise<User | null>{
      return this.userRepository.save(user);
    }
    update(update : UpdateuserDTO) : Promise<User | null>{
      return this.userRepository.save(update);
    }
    async DeleteQuryBuilder(user_id : number) : Promise<void>{
      await this.userRepository.delete({user_id:user_id})
    }
}
@Injectable()
export class AdminService{
  constructor(
    @InjectRepository(Admin)
    private adminRepository : Repository<Admin>
  ){}
  findAll() : Promise<Admin[]>{
    return this.adminRepository.find();
  }
  findOne(admin_id : number) : Promise<Admin | null>{
    return this.adminRepository.findOneBy({admin_id:admin_id});
  }
  creat(admin : CreateadminDTO) : Promise<Admin | null>{
    return this.adminRepository.save(admin);
  }
  update(update : UpdateadminDTO) : Promise<Admin | null>{
    return this.adminRepository.save(update);
  }
  async DeleteQuryBuilder(admin_id : number) : Promise<void>{
    await this.adminRepository.delete({admin_id:admin_id})
  }
}
@Injectable()
export class PostService{
  constructor(
    @InjectRepository(Post)
    private postRepository : Repository<Post>
  ){}
  findAll() : Promise<Post[]>{
    return this.postRepository.find();
  }
  findOne(post_id : number) : Promise<Post | null>{
    return this.postRepository.findOneBy({post_id:post_id});
  }
  creat(post : CreatepostDTO) : Promise<Post | null>{
    return this.postRepository.save(post);
  }
  update(update : UpdatepostDTO) : Promise<Post | null>{
    return this.postRepository.save(update);
  }
  async DeleteQuryBuilder(post_id: number) : Promise<void>{
    await this.postRepository.delete({post_id:post_id})
  }
}
@Injectable()
export class CommentService{
  constructor(
    @InjectRepository(Comment)
    private commentRepository : Repository<Comment>
  ){}
  findAll() : Promise<Comment[]>{
    return this.commentRepository.find();
  }
  findOne(comment_id : number) : Promise<Comment | null>{
    return this.commentRepository.findOneBy({comment_id:comment_id});
  }
  creat(comment : CreatecommentDTO) : Promise<Comment | null>{
    return this.commentRepository.save(comment);
  }
  update(update : UpdatecommentDTO) : Promise<Comment | null>{
    return this.commentRepository.save(update);
  }
  async DeleteQuryBuilder(comment_id: number) : Promise<void>{
    await this.commentRepository.delete({comment_id:comment_id})
  }
}
@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}
  findAll() : Promise<Notification[]>{
    return this.notificationRepository.find();
  }
  findOne(noti_id : number) : Promise<Notification | null>{
    return this.notificationRepository.findOneBy({noti_id:noti_id});
  }
  update(update : UpdatenotificationDTO) : Promise<Notification | null>{
    return this.notificationRepository.save(update);
  }
  async DeleteQuryBuilder(noti_id: number) : Promise<void>{
    await this.notificationRepository.delete({noti_id:noti_id})
  }
  async createNotification(message: string, user_id: number, admin_id: number) {
    const notification = this.notificationRepository.create({
      message: 'notification 1',
      users: [{ user_id }],
      admins: [{ admin_id }],
    });

    await this.notificationRepository.save(notification);
    return notification;
}
}
