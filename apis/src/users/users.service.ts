import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, Users } from './users.interface';
import { UsersDto, UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) { }

  async create(user: UserDto): Promise<User> {
    const createdCat = new this.userModel(user);
    const data = await createdCat.save();
    console.log('create >> ', data);

    return data;
  }
  async createAll(users: UsersDto): Promise<Users> {
    const createdCat = new this.userModel(users);
    const data = await createdCat.save();
    console.log('createAll >> ', data);
    
    return { data: [data] };
  }
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    console.log('users >>> ', users);
    
    return users;
  }
}
