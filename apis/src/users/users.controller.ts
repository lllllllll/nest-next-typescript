import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Users } from './users.interface'
import { UserDto, UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers(): Promise<Users[]|any> {
    const data = await this.userService.findAll();

    return { data };
  }

  @Post()
  async createUsers(@Body() users: UsersDto): Promise<Users> {
    console.log('createUsers >> ', users);
    
    return await this.userService.createAll(users);
  }
  @Post('/byUser')
  async createUser(@Body() user: UserDto): Promise<User> {
    console.log('createUsers >> ', user);
    
    return await this.userService.create(user);
  }
}
