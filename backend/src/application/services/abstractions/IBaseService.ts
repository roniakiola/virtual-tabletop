export interface IBaseService<T> {
  createNew(data: T): Promise<T>;
  getById(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;
  update(id: string, entity: T): Promise<T | null>;
  delete(id: string): Promise<void>;
}
