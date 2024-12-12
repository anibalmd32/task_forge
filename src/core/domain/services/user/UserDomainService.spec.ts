import User from '~/core/domain/entities/User';
import { UserRepository } from '~/core/domain/ports/outbound/UserRepository';
import { UserService } from '~/core/domain/ports/inbound/UserService';
import UserDomainService from './UserDomainService';
import { randomUUID } from 'crypto';

function UserRepositoryMock(user: User): UserRepository {
  return {
    createUser: jest.fn().mockReturnValue(Promise.resolve(user)),
    deleteUser: jest.fn().mockReturnValue(Promise.resolve()),
    getAllUsers: jest.fn().mockReturnValue(Promise.resolve([] as User[])),
    getUserByUUID: jest.fn().mockReturnValue(Promise.resolve({} as User)),
    updateUser: jest.fn().mockReturnValue(Promise.resolve({} as User)),
  };
}

describe('ProductDomainService', () => {
  let service: UserService = null;
  const userMock = {
    email: 'jondoe@task.com',
    id: 1,
    lastName: 'Doe',
    name: 'jon',
    password: '123',
    userName: 'jonforge',
    uuid: randomUUID(),
  };

  it('should call ProductRepository.createUser()', async () => {
    const repositoryMock = UserRepositoryMock(userMock);
    service = new UserDomainService(repositoryMock);
    await service.createUser(userMock);
    expect(repositoryMock.createUser).toHaveBeenCalled();
  });
});
