import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from '~/core/domain/ports/outbound/UserRepository';
import { UserEntity } from '../typeorm-entities/user.entity';
import User from '~/core/domain/entities/User';

@Injectable()
export class UserRepositoryAdapter implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async createUser(userData: Omit<User, 'id' | 'uuid'>): Promise<User> {
    return this.repository.create(userData);
  }

  async deleteUser(userUUID: string): Promise<void> {
    await this.repository.delete({ uuid: userUUID });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.repository.find({});
  }

  async getUserByUUID(userUUID: string): Promise<User> {
    return await this.repository.findOneBy({ uuid: userUUID });
  }

  async updateUser(userUUID: string, userData: Partial<User>): Promise<User> {
    await this.repository.update(
      {
        uuid: userUUID,
      },
      userData,
    );

    return this.getUserByUUID(userUUID);
  }
}
