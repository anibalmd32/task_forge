//** Acciones que el usuario logged puede realizar */

import { OmitBaseEntity } from '../../entities/BaseEntity';
import { Comment } from '../../entities/Comment';
import { Project } from '../../entities/Project';
import { Task } from '../../entities/Task';
import { User } from '../../entities/User';

export interface UserService {
  getProfile(): Promise<User>;
  getProjectsWhereIsMember(): Promise<Project[] | []>;
  getOwnProjects(): Promise<Project[] | []>;
  getAssignedTasks(): Promise<Task[] | []>;
  updatePassword(oldPassword: string, newPassword: string): Promise<void>;
  updateEmail(newEmail: string): Promise<void>;
  updateProfile(
    profileData: Partial<Pick<User, 'name' | 'lastName' | 'username'>>,
  ): Promise<void>;
  addTask(taskData: OmitBaseEntity<Task>): Promise<Task>;
  removeTask(taskUUID: string): Promise<void>;
  addProject(projectData: OmitBaseEntity<Project>): Promise<Project>;
  removeProject(projectUUID: string): Promise<void>;
  updateProfileImage(imagen: any): Promise<void>;
  addComment(
    taskUUID: string,
    commentData: OmitBaseEntity<Comment>,
  ): Promise<Comment>;
  editCommentContent(
    commentUUID: string,
    commentContent: string,
  ): Promise<void>;
  removeComment(commentUUID: string): Promise<void>;
}
