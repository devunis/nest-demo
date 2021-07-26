import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
    constructor (
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>
    ){}

    async boardRegister(board: Board, user: any){
        const users = await this.userRepository.findOne({userId: user.userId})
        return this.boardRepository.save({title : board.title, content : board.content, user: users})
    }

    async getAllBoards(){
        const boards = await this.boardRepository.find()
        return boards;
    }
    async getOne(boardId: number){
        return await this.boardRepository.findOne({boardId : boardId})
    }
}
