import { Board } from './../board/board.entity';
import { Users } from './../users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BoardLike{
    @PrimaryGeneratedColumn()
    boardLikeId: number

    @ManyToOne(type => Users, user => user.boardLike)
    user : Users

    @ManyToOne(type => Board, board => board.boardLike)
    board: Board
}