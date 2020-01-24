import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    me: async (_, __, { request, isAutheticated }) => {
      isAutheticated(request);
      const { user } = request;
      const userProfile = prisma.user({ id: user.id });
      const posts = prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts
      };
    }
  }
};
