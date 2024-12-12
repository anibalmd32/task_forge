import User from '~/core/domain/entities/User';
import { UserService } from '~/core/domain/ports/inbound/UserService';
import { UserRepository } from '~/core/domain/ports/outbound/UserRepository';

export default class UserDomainService implements UserService {
  constructor(private readonly repository: UserRepository) {}

  async createUser(user: Omit<User, 'id' | 'uuid'>): Promise<User> {
    return await this.repository.createUser(user);
  }

  async deleteUser(userUUID: string): Promise<void> {
    return await this.repository.deleteUser(userUUID);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.repository.getAllUsers();
  }

  async getUserByUUID(userUUID: string): Promise<User> {
    return await this.repository.getUserByUUID(userUUID);
  }

  async updateUser(userUUID: string, user: Partial<User>): Promise<User> {
    return await this.updateUser(userUUID, user);
  }
}
