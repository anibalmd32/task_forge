import { PaginationParams } from '~/shared/types';

export interface BaseRepository<T> {
  getByUUID(uuid: string): Promise<T | null>;
  getAll(): Promise<T[] | []>;
  getAllPaginated(pagination: PaginationParams): Promise<T[]>;
  create(data: T): Promise<T>;
  update(uuid: string, data: Partial<T>): Promise<void>;
  delete(uuid: string): Promise<void>;
}
