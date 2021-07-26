import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BoardService } from './board/board.service';
import { BoardModule } from './board/board.module';
import { BoardLikeService } from './board-like/board-like.service';
import { BoardLikeModule } from './board-like/board-like.module';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({}),
    BoardModule,
    BoardLikeModule,
  ],
  controllers: [AppController],
  providers: [AppService, BoardService, BoardLikeService],
})
export class AppModule {
  constructor (private connection: Connection){}
}
