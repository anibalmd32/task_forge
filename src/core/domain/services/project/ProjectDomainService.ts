import Project from '~/core/domain/entities/Project';
import { ProjectService } from '~/core/domain/ports/inbound/ProjectService';
import { ProjectRepository } from '~/core/domain/ports/outbound/ProjectRepository';

export default class ProjectDomainService implements ProjectService {
  constructor(private readonly repository: ProjectRepository) {}

  async createProject(project: Omit<Project, 'id' | 'uuid'>): Promise<Project> {
    return await this.repository.createProject(project);
  }

  async deleteProject(projectUUID: string): Promise<void> {
    return await this.repository.deleteProject(projectUUID);
  }

  async getAllProjects(): Promise<Project[]> {
    return await this.repository.getAllProjects();
  }

  async getProjectByUUID(projectUUID: string): Promise<Project> {
    return await this.repository.getProjectByUUID(projectUUID);
  }

  async updateProject(
    projectUUID: string,
    project: Partial<Project>,
  ): Promise<Project> {
    return await this.repository.updateProject(projectUUID, project);
  }
}
