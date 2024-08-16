import { User } from '../../domain/entities/User';
import { UserService } from '../../application/services/UserService';
import { BaseController } from './BaseController';

export class UserController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  // Add user-specific methods if needed, like login, signup etc.
}
