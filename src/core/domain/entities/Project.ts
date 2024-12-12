import User from '~/core/domain/entities/User';

export default class Project {
  id: string;
  uuid: string;
  name: string;
  owner: User;
  members: User[];
  description?: string;
}
