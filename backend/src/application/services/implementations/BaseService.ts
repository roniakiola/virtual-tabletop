import { IBaseRepository } from '../../../domain/abstractions/repositories/IBaseRepository';
import { IMapper } from '../../shared/IMapper';
import { IBaseService } from '../abstractions/IBaseService';

export abstract class BaseService<T, TCreateDto, TReadDto, TUpdateDto>
  implements IBaseService<T, TCreateDto, TReadDto, TUpdateDto>
{
  constructor(
    private readonly baseRepository: IBaseRepository<T>,
    private readonly mapper: IMapper<TDto, TEntity>
  ) {}

  public async createNew(entityDto: TCreateDto): Promise<TReadDto> {
    const entity = await this.baseRepository.createNew(entityDto);
    return entity;
  }

  public async getById(id: string): Promise<TReadDto | null> {
    return this.baseRepository.getById(id);
  }

  public async getAll(): Promise<TReadDto[]> {
    return this.baseRepository.getAll();
  }

  public async update(id: string, entityDto: TUpdateDto): Promise<TReadDto | null> {
    return this.baseRepository.update(id, entityDto);
  }

  public async delete(id: string): Promise<boolean> {
    return this.baseRepository.delete(id);
  }
}
