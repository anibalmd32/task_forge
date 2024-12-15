//** Acciones que se pueden realizar sobre los usuarios

import { PaginationParams } from '~/shared/types';
import { User } from '../../entities/User';
import { OmitBaseEntity } from '../../entities/BaseEntity';

type FilterQuery = {
  name?: string;
  lastName?: string;
  username?: string;
  email?: string;
};

type FilterUser = {
  query: FilterQuery;
  pagination: PaginationParams;
};

export interface UserManagementService {
  add(userData: OmitBaseEntity<User>): Promise<User>;
  filter(filterParams: FilterUser): Promise<User[] | User | []>;
  getList(): Promise<User[] | []>;
  getListPaginated(pagination: PaginationParams): Promise<User[] | []>;
  remove(userUUID: string): Promise<void>;
  assignProject(assignToUUID: string, projectUUID: string): Promise<void>;
  assignTask(assignToUUID: string, taskUUID: string): Promise<void>;
  unassignProject(unassignToUUID: string, projectUUID: string): Promise<void>;
  unassignTask(unassignToUUID: string, taskUUID: string): Promise<void>;
  showProfile(userUUID: string): Promise<User>;
}
