import { User } from '../../domain/entities/User';
import { UserService } from '../../application/services/implementations/UserService';
import { BaseController } from './BaseController';
import { IUserService } from '../../application/services/abstractions/IUserService';

export class UserController extends BaseController<User> {
  constructor(private readonly userService: IUserService) {
    super(userService);
  }
}
