import { Repository } from 'typeorm';
import { IUserRepository } from '../../domain/abstractions/repositories/IUserRepository';
import { User } from '../../domain/entities/User';
import { BaseRepository } from './BaseRepository';

export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(private readonly userRepository: Repository<User>) {
    super(userRepository);
  }
  public async getByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ username });
  }
}
