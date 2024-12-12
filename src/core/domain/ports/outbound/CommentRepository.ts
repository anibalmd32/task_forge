import Comment from '~/core/domain/entities/Comment';

export interface CommentRepository {
  findCommentByUUID(commentUUID: string): Promise<Comment>;
  findAllComments(): Promise<Comment[]>;
  createOneComment(commentData: Omit<Comment, 'id' | 'uuid'>): Promise<Comment>;
  updateOneComment(
    commentUUID: string,
    commentData: Partial<Comment>,
  ): Promise<Comment>;
  deleteOneComment(commentUUID: string): Promise<void>;
}
