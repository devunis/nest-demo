import { User } from 'src/user/user.entity';
import { ParseIntPipe } from "@nestjs/common";
import { Args, Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query('users')
    async getUsers() {
      return this.userService.findAll();
    }

    @Query('user')
    async findOneByUsername(
      @Args('username')
      username: string,
    ): Promise<User> {
      return this.userService.findOne(username);
    }
}