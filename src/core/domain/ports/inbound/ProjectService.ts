// ** Acciones que el dueño del proyecto puede realizar sobre el mismo

import { Project } from '../../entities/Project';

export interface ProjectService {
  getProjectByUUID(projectUUID: string): Promise<Project>;
  editProjectName(projectUUID: string): Promise<Project>;
  assignNewOwner(projectUUID: string, newOwnerUUID: string): Promise<void>;
  addMembers(projectUUID: string, membersUUID: string[]): Promise<void>;
}
