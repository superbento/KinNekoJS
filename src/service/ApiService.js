import axios from 'axios'

const BaseUrl = 'http://localhost:3030/'

class ApiService {
  fetchProducts () {
    return axios.get(BaseUrl)
  }

  fetchProductById (productId) {
    return axios.get(BaseUrl + 'searchTopic/' + productId)
  }

  deleteProduct (productId) {
    return axios.delete(BaseUrl + 'product/' + productId)
  }

  addProduct (product) {
    return axios.post(BaseUrl + 'addtopic', product)
  }

  editProduct (product) {
    return axios.put(BaseUrl + 'product/' + product.id, product)
  }
}

export default new ApiService()
