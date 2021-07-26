import { Users } from './../users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';

@Module({
    imports: [TypeOrmModule.forFeature([Board, Users])],
    providers: [BoardService],
    exports: [BoardService, TypeOrmModule],
})
export class BoardModule {}
