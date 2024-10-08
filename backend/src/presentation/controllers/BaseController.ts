import { IBaseService } from '../../application/services/abstractions/IBaseService';
import { Request, Response } from 'express';

export abstract class BaseController<T> {
  constructor(private readonly service: IBaseService<T>) {}

  public async createNew(req: Request, res: Response): Promise<Response> {
    try {
      const entity = await this.service.createNew(req.body);
      return res.status(201).json(entity);
    } catch (error) {
      return res.status(400).json({ error: 'creation error' });
    }
  }
  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const entity = await this.service.getById(id);
      if (!entity) return res.status(404).json({ message: 'Not found' });
      return res.status(200).json(entity);
    } catch (error) {
      return res.status(400).json({ error: 'error fetching' });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const entities = await this.service.getAll();
      return res.status(200).json(entities);
    } catch (error) {
      return res.status(400).json({ error: 'error fetching' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const updatedEntity = await this.service.update(id, req.body);
      if (!updatedEntity) return res.status(404).json({ message: 'Not found' });
      return res.status(200).json(updatedEntity);
    } catch (error) {
      return res.status(400).json({ error: 'error updating' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.service.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'error deleting' });
    }
  }
}
