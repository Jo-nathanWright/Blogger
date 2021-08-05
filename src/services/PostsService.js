import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { convertToQuery } from '../utils/Querys'
import { api } from './AxiosService'

class PostsService {
  async getAll(query = {}) {
    const res = await api.get('api/blogs' + convertToQuery(query))
    logger.log(res.data)
    AppState.posts = res.data
  }
}

export const postsService = new PostsService()
