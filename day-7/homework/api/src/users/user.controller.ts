import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() body) {
    await this.userService.create(body.name);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async listUser() {
    const users = await this.userService.list();
    return {
      users,
    };
  }
}
