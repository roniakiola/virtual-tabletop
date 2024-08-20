import { User } from '../../../domain/entities/User';
import { IBaseService } from './IBaseService';

export interface IUserService extends IBaseService<User> {}
