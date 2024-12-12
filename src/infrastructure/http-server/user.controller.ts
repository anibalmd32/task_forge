import { Controller, UseFilters, Inject, Post, Body } from '@nestjs/common';
import { UserExceptionFilter } from './ExceptionFilter';
import { UserApplication } from '~/core/application/user/UserApplication';
import User from '~/core/domain/entities/User';

@Controller('/user')
@UseFilters(UserExceptionFilter)
export class UserController {
  constructor(@Inject('') private application: UserApplication) {}

  @Post('/create')
  async createUser(@Body() data: User) {
    const newUser = await this.application.addNewUser(data);

    return {
      status: 201,
      message: 'User created',
      data: newUser,
    };
  }
}
