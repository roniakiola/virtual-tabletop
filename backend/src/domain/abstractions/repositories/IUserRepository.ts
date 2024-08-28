import { User } from '../../entities/User';
import { IBaseRepository } from './IBaseRepository';

export interface IUserRepository extends IBaseRepository<User> {
  getByUsername(username: string): Promise<User | null>;
}
