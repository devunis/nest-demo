import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(user: User){
    const usernameCheck = await this.userRepository.findOne({
      username : user.username
    })
    if (!usernameCheck && user.username && user.password){
      return this.userRepository.save(user)
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(username: string): Promise<User> {
    return this.userRepository.findOne({
      username : username
    });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}