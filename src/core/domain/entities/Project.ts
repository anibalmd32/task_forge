import { BaseCoreEntity } from './BaseEntity';
import { User } from './User';

export class Project extends BaseCoreEntity {
  name: string;
  owner: User;
  members: User[];
  description?: string;
}
