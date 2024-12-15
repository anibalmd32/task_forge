import { OmitBaseEntity } from '~/core/domain/entities/BaseEntity';
import { Project } from '~/core/domain/entities/Project';
import { Task } from '~/core/domain/entities/Task';
import { User } from '~/core/domain/entities/User';
import { UserService } from '~/core/domain/ports/inbound/UserService';
import { ProjectRepository } from '~/core/domain/ports/outbound/ProjectRepository';
import { TaskRepository } from '~/core/domain/ports/outbound/TaskRepository';
import { UserRepository } from '~/core/domain/ports/outbound/UserRepository';

export default class UserApplicationService implements UserService {
  constructor(
    private userRepository: UserRepository,
    private projectRepository: ProjectRepository,
    private taskRepository: TaskRepository,
  ) {}

  async getProfile(userUUID: string): Promise<User> {
    return await this.userRepository.getByUUID(userUUID);
  }

  async getProjectsWhereIsMember(userUUID: string) {
    return await this.projectRepository.getByUserMember(userUUID);
  }

  async getOwnProjects(userUUID: string) {
    return await this.projectRepository.getByUserOwner(userUUID);
  }

  async getAssignedTasks(userUUID: string): Promise<Task[] | []> {
    return await this.taskRepository.getByUserAssigned(userUUID);
  }

  async updatePassword(
    userUUID: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<void> {
    // TODO: validar la antigua contraseña
    return await this.userRepository.update(userUUID, {
      password: newPassword,
    });
  }

  async updateEmail(userUUID: string, newEmail: string): Promise<void> {
    return await this.userRepository.update(userUUID, { email: newEmail });
  }

  async updateProfile(
    userUUID: string,
    profileData: Partial<Pick<User, 'name' | 'lastName' | 'username'>>,
  ): Promise<void> {
    return await this.userRepository.update(userUUID, profileData);
  }

  async addTask(taskData: OmitBaseEntity<Task>): Promise<Task> {
    return await this.taskRepository.create(taskData);
  }

  async removeTask(taskUUID: string): Promise<void> {
    return this.taskRepository.delete(taskUUID);
  }

  async addProject(projectData: OmitBaseEntity<Project>): Promise<Project> {
    return await this.projectRepository.create(projectData);
  }

  async removeProject(projectUUID: string): Promise<void> {
    return await this.projectRepository.delete(projectUUID);
  }
}
