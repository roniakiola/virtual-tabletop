import { Router } from 'express';
import { UserService } from '../../application/services/UserService';
import { AppDataSource } from '../../infrastructure/database';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';
import { UserController } from '../controllers/UserController';
import { UserModel } from '../../infrastructure/models/UserModel';

const userRepository = new UserRepository(
  AppDataSource.getRepository(UserModel)
);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const userRouter = Router();

userRouter.post('/users', (req, res) => userController.createNew(req, res));
userRouter.get('/users/:id', (req, res) => userController.getById(req, res));
userRouter.get('/users', (req, res) => userController.getAll(req, res));
userRouter.put('/users/:id', (req, res) => userController.update(req, res));
userRouter.delete('/users/:id', (req, res) => userController.delete(req, res));

export default userRouter;
