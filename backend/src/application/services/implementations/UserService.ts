import { IUserRepository } from '../../../domain/abstractions/repositories/IUserRepository';
import { User } from '../../../domain/entities/User';
import { UserCreateDto } from '../../dto/userdto/UserCreateDto';
import { UserReadDto } from '../../dto/userdto/UserReadDto';
import { UserUpdateDto } from '../../dto/userdto/UserUpdateDto';
import { IPasswordService } from '../abstractions/IPasswordService';
import { IUserService } from '../abstractions/IUserService';
import { BaseService } from './BaseService';

export class UserService
  extends BaseService<User, UserCreateDto, UserReadDto, UserUpdateDto>
  implements IUserService
{
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordService: IPasswordService
  ) {
    super(userRepository);
  }
  public async createNew(data: User): Promise<User> {
    const hashedPassword = await this.passwordService.hashPassword(data.password);
    data.password = hashedPassword;
    return super.createNew(data);
  }
}
