import { PaginationParams } from '~/shared/types';
import { OmitBaseEntity } from '../../entities/BaseEntity';

export interface BaseRepository<T> {
  getByUUID(uuid: string): Promise<T | null>;
  getAll(): Promise<T[] | []>;
  getAllPaginated(pagination: PaginationParams): Promise<T[]>;
  create(data: OmitBaseEntity<T>): Promise<T>;
  update(uuid: string, data: Partial<T>): Promise<void>;
  delete(uuid: string): Promise<void>;
  getByUser(userUUID: string): Promise<T[] | []>;
}
