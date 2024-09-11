export interface IBaseService<T, TCreateDto, TReadDto, TUpdateDto> {
  createNew(entityDto: TCreateDto): Promise<TReadDto>;
  getById(id: string): Promise<TReadDto | null>;
  getAll(): Promise<TReadDto[]>;
  update(id: string, entityDto: TUpdateDto): Promise<TReadDto | null>;
  delete(id: string): Promise<boolean>;
}
