import { IMapper } from './IMapper';

export class Mapper<TDto extends Record<string, any>, TEntity extends Record<string, any>>
  implements IMapper<TDto, TEntity>
{
  toEntity(dto: TDto): TEntity {
    const entity = {} as TEntity;
    Object.keys(dto).forEach((key) => {
      if (key in entity) {
        (entity as Record<string, any>)[key] = dto[key];
      }
    });
    return entity;
  }

  toDto(entity: TEntity): TDto {
    const dto = {} as TDto;
    Object.keys(entity).forEach((key) => {
      if (key in dto) {
        (dto as Record<string, any>)[key] = entity[key];
      }
    });
    return dto;
  }
}
