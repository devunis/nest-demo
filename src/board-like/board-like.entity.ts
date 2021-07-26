import { Board } from './../board/board.entity';
import { User } from '../user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BoardLike{
    @PrimaryGeneratedColumn()
    boardLikeId: number

    @ManyToOne(type => User, user => user.boardLike)
    user : User

    @ManyToOne(type => Board, board => board.boardLike)
    board: Board
}