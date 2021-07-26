import { BoardLikeService } from './board-like/board-like.service';
import { BoardService } from './board/board.service';
import { Controller, Get, Request, Post, Render, UseGuards, Param, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/auth.local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private usersService: UsersService,
    private boardService: BoardService,
    private boardLikeService: BoardLikeService) {}

  @Get()
  @Render('index')
  async root(){
    console.log(await this.boardService.getAllBoards());
    
    return { 
      boards : await this.boardService.getAllBoards(),
    };
  }

  @Get('login')
  @Render('login')
  loginPage(){
    return {}
  }

  @Get('register')
  @Render('register')
  signInPage(){
    return {}
  }

  @Get('board/:boardId')
  @Render('board')
  async boardPage(@Param() params){
    return { board : await this.boardService.getOne(params.boardId)}
  }

  @UseGuards(LocalAuthGuard)
  @Redirect('/')
  @Post('auth/login')
  async login(@Request() req,@Res() res) {
    const token = await this.authService.login(req.user);
    return localStorage.setItem('token', token.access_token)
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  @Redirect('login')
  register(@Request() req){
    return this.usersService.register(req.body)
  }

  @UseGuards(JwtAuthGuard)
  @Post('board/register')
  boardRegister(@Request() req){
    return this.boardService.boardRegister(req.body, req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Post('board/like')
  boardLike(@Request() req){
    return this.boardLikeService.boardLike(req.body, req.user)
  }

}
