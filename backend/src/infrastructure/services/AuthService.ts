import jwt from 'jsonwebtoken';
import { IAuthService } from '../../application/services/abstractions/IAuthService';
import { IUserRepository } from '../../domain/abstractions/repositories/IUserRepository';
import { IPasswordService } from '../../application/services/abstractions/IPasswordService';

export class AuthService implements IAuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordService: IPasswordService
  ) {}

  public async login(username: string, password: string): Promise<string> {
    const user = await this.userRepository.getByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    const validPassword = await this.passwordService.verifyPassword(
      user!.password,
      password
    );
    if (!validPassword) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );
    return token;
  }

  public async validateToken(token: string): Promise<boolean> {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return true;
    } catch {
      return false;
    }
  }
}
