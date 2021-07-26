import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async register(user: Users){
    const usernameCheck = await this.usersRepository.findOne({
      username : user.username
    })
    if (!usernameCheck && user.username && user.password){
      return this.usersRepository.save(user)
    }
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<Users> {
    return this.usersRepository.findOne({
      username : username
    });
  }

  async remove(userId: number): Promise<void> {
    await this.usersRepository.delete(userId);
  }
}