import { BoardLike } from './../board-like/board-like.entity';
import { Board } from './../board/board.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    userId: number

    @Column()
    username!: string

    @Column()
    password!: string

    @OneToMany(type => Board, board => board.user)
    boards: Board[]

    @OneToMany(type => BoardLike, boardLike => boardLike.user)
    boardLike: BoardLike[]
}