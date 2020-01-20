import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    addComment: async (_, arg, { request }) => {
      isAuthenticated(request);
      const { text, postId } = arg;
      const { user } = request;
      const comment = await prisma.createComment({
        user: {
          connect: {
            id: user.id
          }
        },
        post: {
          connect: {
            id: postId
          }
        },
        text
      });
      return comment;
    }
  }
};
