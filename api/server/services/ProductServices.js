import database from '../src/models'

class ProductsService {
  static async getAllProducts() {
    try {
      return await database.Menu.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addProduct(newProduct) {
    try {
      return await database.Menu.create(newProduct)
    } catch (error) {
      throw error
    }
  }

  // static async updateAuthor(id, updateAuthor) {
  //   try {
  //     const authorToUpdate = await database.Author.findOne({
  //       where: { id: Number(id) }
  //     })

  //     if (authorToUpdate) {
  //       await database.Author.update(updateAuthor, { where: { id: Number(id) } })

  //       return updateAuthor
  //     }
  //     return null
  //   } catch (error) {
  //     throw error
  //   }
  // }

  static async getProduct(id) {
    try {
      const theProduct = await database.Menu.findOne({
        where: { id: Number(id) }
      })

      return theProduct
    } catch (error) {
      throw error
    }
  }

  // static async deleteAuthor(id) {
  //   try {
  //     const authorToDelete = await database.Author.findOne({ where: { id: Number(id) } })

  //     if (authorToDelete) {
  //       const deletedAuthor = await database.Author.destroy({
  //         where: { id: Number(id) }
  //       })
  //       return deletedAuthor
  //     }
  //     return null
  //   } catch (error) {
  //     throw error
  //   }
  // }
}

export default ProductsService