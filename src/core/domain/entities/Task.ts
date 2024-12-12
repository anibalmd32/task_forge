import User from '~/core/domain/entities/User';
import Comment from '~/core/domain/entities/Comment';

export default class Task {
  id: number;
  uuid: string;
  title: string;
  status: number;
  assignedTo: User;
  comments: Comment[];
}
