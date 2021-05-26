import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { Response } from '../_common/interfaces/response.interface';
import { InjectModel } from '@nestjs/mongoose';
import{User} from './interface/user.interface';
import { Model } from 'mongoose';
import { truncate } from 'fs';
@Injectable()

export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

   async create(user: CreateUserDto){
    const newCountry = new this.userModel(user);
    const response = await newCountry.save();
    return(response);
  }

  async findAll() {
    const response = await this.userModel.find();
    return (response);
  }

  async findOne(id: String) {
   
    const response = await this.userModel.findById(id);
    return (response);
  }

  async update(id: String, user: UpdateUserDto) {
    const response = await this.userModel.findByIdAndUpdate(id,user,{new:true});
    return (response);
  }

  async remove(id: String) {
    const response = await this.userModel.findByIdAndRemove(id);
    return (response);
  }
}
