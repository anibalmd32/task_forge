import { BaseRepository } from './BaseRepository';
import { Comment } from '../../entities/Comment';

export interface CommentRepository extends BaseRepository<Comment> {}
