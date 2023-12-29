import { Module } from '@nestjs/common';
import { UserController } from './ihm/ihm.controller';
import { AppService } from './app.service';
import { UserService } from './ihm/ihm.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import {User,Admin,Notification,Post,Comment} from './ihm/ihm.entitices'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'ihm',
      entities: [User,Admin,Notification,Post,Comment],
      synchronize: true
    }),
    TypeOrmModule.forFeature([User,Admin,Notification,Post,Comment])
  ],
  controllers: [UserController],
  providers: [AppService,UserService],
})
export class AppModule {}