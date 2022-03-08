import axios from 'axios'

export default class PostService {
  //По умолчанию функция будет принимать количство постов на странице и номер страницы
  static async getAll(limit = 10, page = 1) {
    let responce = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    )
    return responce
  }
}
