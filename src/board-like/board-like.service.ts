import { BoardLike } from 'src/board-like/board-like.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/board/board.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardLikeService {
    constructor (
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(BoardLike)
        private boardLikeRepository: Repository<BoardLike>
    ){}

    async boardLike(payload: any, user: any){
        const boards = await this.boardRepository.findOne({boardId: payload.boardId})
        const users = await this.userRepository.findOne({id: user.id})

        if (await this.boardLikeRepository.findOne({board: boards, user: users})){
            console.log('boardlike deleted');
            return this.boardLikeRepository.delete({board:boards, user: users})
        }
        else {
            console.log('boardlike accepted');
            return this.boardLikeRepository.save({board: boards, user: users})
        }
        
    }
}
