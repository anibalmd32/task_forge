import User from '~/core/domain/entities/User';

export interface UserApplication {
  addNewUser(
    userData: Omit<User, 'id' | 'uuid' | 'password' | 'username'>,
  ): Promise<User>;
}
