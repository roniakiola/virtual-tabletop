import { Router } from 'express';
import { UserService } from '../../application/services/implementations/UserService';
import { AppDataSource } from '../../infrastructure/database/AppDataSource';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';
import { UserController } from '../controllers/UserController';
import { UserModel } from '../../infrastructure/models/UserModel';
import { IUserRepository } from '../../domain/abstractions/repositories/IUserRepository';
import { IUserService } from '../../application/services/abstractions/IUserService';
import { PasswordService } from '../../infrastructure/services/PasswordService';

const userRepository: IUserRepository = new UserRepository(
  AppDataSource.getRepository(UserModel)
);
const passwordService = new PasswordService();
const userService: IUserService = new UserService(
  userRepository,
  passwordService
);
const userController = new UserController(userService);

const userRouter = Router();

userRouter.post('/users', (req, res) => userController.createNew(req, res));
userRouter.get('/users/:id', (req, res) => userController.getById(req, res));
userRouter.get('/users', (req, res) => userController.getAll(req, res));
userRouter.put('/users/:id', (req, res) => userController.update(req, res));
userRouter.delete('/users/:id', (req, res) => userController.delete(req, res));

export default userRouter;
