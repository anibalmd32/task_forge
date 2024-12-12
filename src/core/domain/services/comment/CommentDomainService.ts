import Comment from '~/core/domain/entities/Comment';
import { CommentService } from '~/core/domain/ports/inbound/CommentService';
import { CommentRepository } from '~/core/domain/ports/outbound/CommentRepository';

export default class CommentDomainService implements CommentService {
  constructor(private readonly repository: CommentRepository) {}

  async createOneComment(
    commentData: Omit<Comment, 'id' | 'uuid'>,
  ): Promise<Comment> {
    return await this.repository.createOneComment(commentData);
  }

  async deleteOneComment(commentUUID: string): Promise<void> {
    return await this.repository.deleteOneComment(commentUUID);
  }

  async findAllComments(): Promise<Comment[]> {
    return await this.findAllComments();
  }

  async findCommentByUUID(commentUUID: string): Promise<Comment> {
    return await this.repository.findCommentByUUID(commentUUID);
  }

  async updateOneComment(
    commentUUID: string,
    commentData: Partial<Comment>,
  ): Promise<Comment> {
    return await this.repository.updateOneComment(commentUUID, commentData);
  }
}
