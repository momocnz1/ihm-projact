import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// import { UserService,AdminService,PostService,CommentService,NotificationService } from './ihm/ihm.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import PostNotification from './ihm/entities/postNotification';
import User from './ihm/entities/user';
import Admin from './ihm/entities/admin';
import Post from './ihm/entities/post';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports :[ConfigModule],
      useFactory:(configService : ConfigService) =>{
        let option : TypeOrmModule = {
          type : "sqlite" ,
          database : configService.get<string>("DATABASE_NAME", 'ihm.db'),
          entities: [User,Admin,PostNotification,Post],
          synchronize: true
        }
        return option;
      },
     inject : [ConfigService]
    }),
    TypeOrmModule.forFeature([User,Admin,PostNotification,Post])
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}