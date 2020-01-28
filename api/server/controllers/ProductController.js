import ProductServices from '../services/ProductServices'
import Util from '../utils/Utils'

const util = new Util()

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductServices.getAllProducts()
      if (allProducts.length > 0) {
        util.setSuccess(200, 'Products retrieved', allProducts)
      } else {
        util.setSuccess(200, 'No Products found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  // static async addProduct(req, res) {
  //   if (!req.body.name || !req.body.is_alive ) {
  //     util.setError(400, 'Please provide complete details')
  //     return util.send(res)
  //   }
  //   const newProduct = req.body
  //   try {
  //     const createdProduct = await ProductServices.addProduct(newProduct)
  //     util.setSuccess(201, 'Product Added!', createdProduct)
  //     return util.send(res)
  //   } catch (error) {
  //     util.setError(400, error.message)
  //     return util.send(res)
  //   }
  // }

  // static async updatedAuthor(req, res) {
  //   const alteredAuthor = req.body
  //   const { id } = req.params
  //   if (!Number(id)) {
  //     util.setError(400, 'Please input a valid numeric value')
  //     return util.send(res)
  //   }
  //   try {
  //     const updateAuthor = await ProductServices.updateAuthor(id, alteredAuthor)
  //     if (!updateAuthor) {
  //       util.setError(404, `Cannot find author with the id: ${id}`)
  //     } else {
  //       util.setSuccess(200, 'Author updated', updateAuthor)
  //     }
  //     return util.send(res)
  //   } catch (error) {
  //     util.setError(404, error)
  //     return util.send(res)
  //   }
  // }

  // static async getAuthor(req, res) {
  //   const { id } = req.params

  //   if (!Number(id)) {
  //     util.setError(400, 'Please input a valid numeric value')
  //     return util.send(res)
  //   }

  //   try {
  //     const theAuthor = await ProductServices.getAuthor(id)

  //     if (!theAuthor) {
  //       util.setError(404, `Cannot find Author with the id ${id}`)
  //     } else {
  //       util.setSuccess(200, 'Found Author', theAuthor)
  //     }
  //     return util.send(res)
  //   } catch (error) {
  //     util.setError(404, error)
  //     return util.send(res)
  //   }
  // }

  // static async deleteAuthor(req, res) {
  //   const { id } = req.params

  //   if (!Number(id)) {
  //     util.setError(400, 'Please provide a numeric value')
  //     return util.send(res)
  //   }

  //   try {
  //     const authorToDelete = await ProductServices.deleteAuthor(id)

  //     if (authorToDelete) {
  //       util.setSuccess(200, 'Author deleted')
  //     } else {
  //       util.setError(404, `Author with the id ${id} cannot be found`)
  //     }
  //     return util.send(res)
  //   } catch (error) {
  //     util.setError(400, error)
  //     return util.send(res)
  //   }
  // }
}

export default ProductController