import User from '~/core/domain/entities/User';

export interface UserRepository {
  getUserByUUID(userUUID: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  createUser(userData: Omit<User, 'id' | 'uuid'>): Promise<User>;
  updateUser(userUUID: string, userData: Partial<User>): Promise<User>;
  deleteUser(userUUID: string): Promise<void>;
}
