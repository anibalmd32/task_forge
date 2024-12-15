//** Acciones que se puede realizar sobre las tareas por cualquier usuario */

import { Task } from '../../entities/Task';
import { TaskStatus, TaskPriority, PaginationParams } from '~/shared/types';

export interface TaskService {
  getByStatus(status: TaskStatus): Promise<Task[] | []>;
  getByPriority(priority: TaskPriority): Promise<Task[] | []>;
  getByUser(
    userUUID: string,
    pagination: PaginationParams,
  ): Promise<Task[] | []>;
  editTitile(taskUUID: string, newTitle: string): Promise<Task>;
  editDescription(taskUUID: string, newDescription: string): Promise<Task>;
}
