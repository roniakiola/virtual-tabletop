import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { IAuthService } from '../../application/services/abstractions/IAuthService';
import { AuthService } from '../../infrastructure/services/AuthService';
import { IUserRepository } from '../../domain/abstractions/repositories/IUserRepository';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';
import { AppDataSource } from '../../infrastructure/database/AppDataSource';
import { UserModel } from '../../infrastructure/models/UserModel';
import { IPasswordService } from '../../application/services/abstractions/IPasswordService';
import { PasswordService } from '../../infrastructure/services/PasswordService';

const userRepository: IUserRepository = new UserRepository(
  AppDataSource.getRepository(UserModel)
);
const passwordService: IPasswordService = new PasswordService();
const authService: IAuthService = new AuthService(
  userRepository,
  passwordService
);
const authController = new AuthController(authService);

const authRouter = Router();

authRouter.post('/login', (req, res) => authController.login(req, res));

export default authRouter;
