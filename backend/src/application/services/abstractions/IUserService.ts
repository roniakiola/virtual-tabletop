import { User } from '../../../domain/entities/User';
import { UserCreateDto } from '../../dto/userdto/UserCreateDto';
import { UserReadDto } from '../../dto/userdto/UserReadDto';
import { UserUpdateDto } from '../../dto/userdto/UserUpdateDto';
import { IBaseService } from './IBaseService';

export interface IUserService
  extends IBaseService<User, UserCreateDto, UserReadDto, UserUpdateDto> {}
