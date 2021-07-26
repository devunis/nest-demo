import { BoardLike } from "src/board-like/board-like.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board{
    @PrimaryGeneratedColumn()
    boardId: number

    @Column()
    title!: string

    @Column()
    content!: string

    @ManyToOne(type => User, user => user.boards)
    user : User

    @OneToMany(type => BoardLike, boardLike => boardLike.board)
    boardLike: BoardLike[]
}