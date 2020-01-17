import { isAuthenticated } from '../../../middlewares';

export default {
  toggleLike: async (_, args, { request }) => {
    isAuthenticated(request);
  }
};
