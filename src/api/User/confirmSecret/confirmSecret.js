import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../utils';

export default {
  Mutation: {
    confirmSecret: async (_, args, { request }) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        await prisma.uadateUser({
          where: { id: user.id },
          data: {
            loginSecret: ''
          }
        });
        return generateToken(user.id);
      } else {
        throw Error('Worng email/secret combination');
      }
    }
  }
};
