import { BoardLike } from "src/board-like/board-like.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board{
    @PrimaryGeneratedColumn()
    boardId: number

    @Column()
    title!: string

    @Column()
    content!: string

    @ManyToOne(type => Users, user => user.boards)
    user : Users

    @OneToMany(type => BoardLike, boardLike => boardLike.board)
    boardLike: BoardLike[]
}