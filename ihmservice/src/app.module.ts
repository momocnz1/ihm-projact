import { Module } from '@nestjs/common';
import { UserController,AdminController, PostController,CommentController,NotificationController } from './ihm/ihm.controller';
import { AppService } from './app.service';
import { UserService,AdminService,PostService,CommentService,NotificationService } from './ihm/ihm.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import {User,Admin,Notification,post,Comment} from './ihm/ihm.entitices'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'ihm',
      entities: [User,Admin,Notification,post,Comment],
      synchronize: true
    }),
    TypeOrmModule.forFeature([User,Admin,Notification,post,Comment])
  ],
  controllers: [UserController,AdminController,PostController,CommentController,NotificationController],
  providers: [AppService,UserService,AdminService,PostService,CommentService,NotificationService],
})
export class AppModule {}