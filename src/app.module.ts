import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BoardService } from './board/board.service';
import { BoardModule } from './board/board.module';
import { BoardLikeService } from './board-like/board-like.service';
import { BoardLikeModule } from './board-like/board-like.module';
import { join } from 'path';

@Module({
  imports: [
    AuthModule, 
    UserModule,
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      }
    }),
    BoardModule,
    BoardLikeModule,
  ],
  controllers: [AppController],
  providers: [AppService, BoardService, BoardLikeService],
})
export class AppModule {
  constructor (private connection: Connection){}
}
