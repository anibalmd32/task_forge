import { TaskStatus, TaskPriority } from '~/shared/types';
import { BaseCoreEntity } from './BaseEntity';
import { Comment } from './Comment';
import { User } from './User';
export class Task extends BaseCoreEntity {
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo: User;
  comments: Comment[];
}
