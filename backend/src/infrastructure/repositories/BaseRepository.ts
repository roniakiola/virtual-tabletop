import { FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
import { IBaseRepository } from '../../domain/abstractions/repositories/IBaseRepository';

export abstract class BaseRepository<T extends ObjectLiteral>
  implements IBaseRepository<T>
{
  constructor(private readonly repository: Repository<T>) {}

  public async createNew(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  public async getById(id: string): Promise<T | null> {
    return await this.repository.findOneBy({
      id,
    } as unknown as FindOptionsWhere<T>); //This is a quick fix until TypeORM fixes their code
  }

  public async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  public async update(id: string, entity: T): Promise<T | null> {
    await this.repository.update(id, entity);
    return this.getById(id);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
