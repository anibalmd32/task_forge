import { BaseRepository } from './BaseRepository';
import { Project } from '../../entities/Project';

export interface ProjectRepository extends BaseRepository<Project> {
  getByUserMember(userUUID: string): Promise<Project[] | []>;
  getByUserOwner(userUUID: string): Promise<Project[] | []>;
}
