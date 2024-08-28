import { IAuthService } from '../../application/services/abstractions/IAuthService';
import { Request, Response } from 'express';

export class AuthController {
  constructor(private readonly authService: IAuthService) {}
  public async login(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    try {
      const token = await this.authService.login(username, password);
      return res.json({ token });
    } catch (error) {
      return res.status(401).json({ message: (error as Error).message });
    }
  }
}
