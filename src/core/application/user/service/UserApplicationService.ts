import User from '~/core/domain/entities/User';
import { UserService } from '~/core/domain/ports/inbound/UserService';
import { UserApplication } from '~/core/application/user/UserApplication';

export default class UserApplicationService implements UserApplication {
  constructor(private user: UserService) {}

  async addNewUser(
    userData: Omit<User, 'password' | 'username'>,
  ): Promise<User> {
    return await this.user.createUser(userData);
  }
}
