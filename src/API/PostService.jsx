import axios from 'axios'

export default class PostService {
  static async getAll() {
    try {
      let responce = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      return responce.data
    } catch (err) {
      console.error(err)
    }
  }
}
