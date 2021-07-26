import { UserResolver } from './user.resolver';
import { BoardLike } from 'src/board-like/board-like.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, BoardLike])],
  providers: [UserService, UserResolver],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
