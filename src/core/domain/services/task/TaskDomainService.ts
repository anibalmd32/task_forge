import { TaskService } from '~/core/domain/ports/inbound/TaskService';
import { TaskRepository } from '~/core/domain/ports/outbound/TaskRepository';
import Task from '~/core/domain/entities/Task';

export default class TaskDomainService implements TaskService {
  constructor(private readonly repository: TaskRepository) {}

  async createTask(task: Omit<Task, 'id' | 'uuid'>): Promise<Task> {
    return await this.repository.createTask(task);
  }

  async deleteTask(taskUUID: string): Promise<void> {
    return await this.repository.deleteTask(taskUUID);
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.repository.getAllTasks();
  }

  async getTaskByUUID(taskUUID: string): Promise<Task> {
    return await this.repository.getTaskByUUID(taskUUID);
  }

  async updateTask(taskUUID: string, task: Partial<Task>): Promise<Task> {
    return await this.repository.updateTask(taskUUID, task);
  }
}
