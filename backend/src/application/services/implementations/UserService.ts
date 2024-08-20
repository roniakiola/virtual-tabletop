import { IUserRepository } from '../../../domain/abstractions/repositories/IUserRepository';
import { User } from '../../../domain/entities/User';
import { IUserService } from '../abstractions/IUserService';
import { BaseService } from './BaseService';

export class UserService extends BaseService<User> implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {
    super(userRepository);
  }
}
