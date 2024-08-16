import { User } from '../../domain/entities/User';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';
import { BaseService } from './BaseService';

export class UserService extends BaseService<User> {
  constructor(repository: UserRepository) {
    super(repository);
  }
}
