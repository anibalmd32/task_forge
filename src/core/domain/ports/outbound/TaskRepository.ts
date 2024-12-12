import Task from '~/core/domain/entities/Task';

export interface TaskRepository {
  getTaskByUUID(taskUUID: string): Promise<Task>;
  getAllTasks(): Promise<Task[]>;
  createTask(taskData: Omit<Task, 'id' | 'uuid'>): Promise<Task>;
  updateTask(taskUUID: string, taskData: Partial<Task>): Promise<Task>;
  deleteTask(taskUUID: string): Promise<void>;
}
