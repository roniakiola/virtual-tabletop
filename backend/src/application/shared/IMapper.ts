export interface IMapper<TDto, TEntity> {
  toEntity(dto: TDto): TEntity;
  toDto(entity: TEntity): TDto;
}
