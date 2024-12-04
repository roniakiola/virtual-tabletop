import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserReadDto } from './dto/user.read.dto';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user.create.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userCreateDto: UserCreateDto): Promise<UserReadDto> {
    return await this.userService.create(userCreateDto);
  }

  @Get()
  async getAll(): Promise<UserReadDto[]> {
    return await this.userService.getAll();
  }
}
