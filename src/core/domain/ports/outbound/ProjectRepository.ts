import Project from '~/core/domain/entities/Project';

export interface ProjectRepository {
  getProjectByUUID(projectUUID: string): Promise<Project>;
  getAllProjects(): Promise<Project[]>;
  createProject(projectData: Omit<Project, 'id' | 'uuid'>): Promise<Project>;
  updateProject(
    projectUUID: string,
    projectData: Partial<Project>,
  ): Promise<Project>;
  deleteProject(projectUUID: string): Promise<void>;
}
