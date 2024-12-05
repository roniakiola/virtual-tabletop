import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { UserReadDto } from './dto/user.read.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userCreateDto: UserCreateDto): Promise<UserReadDto> {
    const user = await this.userRepository.save(userCreateDto);
    return user;
  }

  async getOneById(id: string): Promise<UserReadDto> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async getOneByUsername(username: string): Promise<UserReadDto> {
    const user = await this.userRepository.findOneBy({ username });
    return user;
  }

  async getAll(): Promise<UserReadDto[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
