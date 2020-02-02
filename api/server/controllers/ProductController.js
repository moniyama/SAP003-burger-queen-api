import models from '../src/models'

// res.send x res.json

const getAllProducts = async(req, res) => {
  const allProducts = await models.Products.findAll({raw:true})
  if(allProducts.length > 0) {
    res.json(products = {  message:"Products Found!", allProducts = allProducts }) 
  } else {
    res.json(products = {message:"No Products found"})
  }
}

const addProduct = async(req, res) => {
  if (!req.body.item || !req.body.price || !req.body.type ) {
    res.json(products = {message:'Please provide complete details'})
  } else {
    const newProduct = await models.Products.create(req.body)
    res.json(products = {message:'Product Added!', productAdded: newProduct})
  }
}

const getProduct = async(req, res) => {
  const { productid } = req.params
  if (!Number(productid)) {
    res.json(products = {message:'Please input a valid numeric value'})
  } else {
    const theProduct = await models.Products.findOne({ 
      where: { id: Number(productid) }
    })
    if (!theProduct) {
      res.json(products = {message:`Cannot find Product with the id ${productid}`})
    } else {
      res.json(products = {message:'Found Product!', theProduct: theProduct})
    }
  }
}

const updatedProduct = async(req, res) => {
  const alteredProduct = req.body
  const { productid } = req.params
  if (!Number(productid)) {
    res.json(products = {message:'Please input a valid numeric value'})
  } else {
    const updateProduct = await models.Products.findOne({ 
      where: { id: Number(productid) }
      })
    if (!updateProduct) {
      res.json(products = {message:`Cannot find Product with the id ${productid}`})
    } else {
      updateProduct.update(alteredProduct, { where: { id: Number(productid) } })
      res.json(products = {message:'Product Updated!', productUpdated: updateProduct})
    }
  }
}

const deleteProduct = async(req, res) => {
  const { productid } = req.params
  if (!Number(productid)) {
    res.json(products = {message:'Please input a valid numeric value'})
  } else {
    const deletedProduct = await models.Products.findOne({ 
      where: { id: Number(productid) }
      })
    if (!deletedProduct) {
      res.json(products = {message:`Cannot find Product with the id ${productid}`})
    } else {
      deletedProduct.destroy({ where: { id: Number(productid) } })
      res.json(products = {message:'Product Deleted!', productDeleted: deletedProduct})
    }
  }
}

export default { 
  getAllProducts,
  addProduct,
  getProduct,
  updatedProduct,
  deleteProduct
}