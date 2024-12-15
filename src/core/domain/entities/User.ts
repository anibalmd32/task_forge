import { BaseCoreEntity } from './BaseEntity';
import { Comment } from './Comment';
import { Project } from './Project';
import { Task } from './Task';

export class User extends BaseCoreEntity {
  name: string;
  lastName: string;
  username: string;
  imageUrl?: string;
  email: string;
  password: string;
  projects: Project[];
  projectsMember: Project[];
  tasks: Task[];
  comments: Comment[];
}
