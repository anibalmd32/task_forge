import { BaseCoreEntity } from './BaseEntity';
import { Task } from './Task';
import { User } from './User';

export class Comment extends BaseCoreEntity {
  content: string;
  writtenBy: User;
  task: Task;
}
