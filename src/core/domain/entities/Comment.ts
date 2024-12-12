import User from '~/core/domain/entities/User';
import Task from '~/core/domain/entities/Task';

export default class Comment {
  id: number;
  uuid: string;
  content: string;
  writtenBy: User;
  task: Task;
}
