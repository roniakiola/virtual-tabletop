import { IBaseRepository } from '../../../domain/abstractions/repositories/IBaseRepository';
import { IBaseService } from '../abstractions/IBaseService';

export abstract class BaseService<T> implements IBaseService<T> {
  constructor(private readonly baseRepository: IBaseRepository<T>) {}

  public async createNew(data: T): Promise<T> {
    const entity = await this.baseRepository.createNew(data);
    return entity;
  }

  public async getById(id: string): Promise<T | null> {
    return this.baseRepository.getById(id);
  }

  public async getAll(): Promise<T[]> {
    return this.baseRepository.getAll();
  }

  public async update(id: string, entity: T): Promise<T | null> {
    return this.baseRepository.update(id, entity);
  }

  public async delete(id: string): Promise<void> {
    return this.baseRepository.delete(id);
  }
}
