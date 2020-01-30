import models from '../src/models'

// res.send x res.json

const getAllProducts = async(req, res) => {
  const allProducts = await models.Products.findAll({raw:true})
  if(allProducts.length > 0) {
    res.json(allProducts) 
  } else {
    res.json({message:"No Products found"})
  }
}

const addProduct = async(req, res) => {
  if (!req.body.item || !req.body.price || !req.body.type ) {
    res.json({message:'Please provide complete details'})
  } else {
    const newProduct = await models.Products.create(req.body)
    res.json({message:'Product Added!', ProductAdded: newProduct})
  }
}

const getProduct = async(req, res) => {
  const { productid } = req.params
  if (!Number(productid)) {
    res.json({message:'Please input a valid numeric value'})
  } else {
    const theProduct = await models.Products.findOne({ 
      where: { id: Number(productid) }
    })
    if (!theProduct) {
      res.json({message:`Cannot find Product with the id ${productid}`})
    } else {
      res.json({message:'Found Product!', ProductGet: theProduct})
    }
  }
}

const updatedProduct = async(req, res) => {
  const alteredProduct = req.body
  const { productid } = req.params
  if (!Number(productid)) {
    res.json({message:'Please input a valid numeric value'})
  } else {
    const updateProduct = await models.Products.findOne({ 
      where: { id: Number(productid) }
      })
    if (!updateProduct) {
      res.json({message:`Cannot find Product with the id ${productid}`})
    } else {
      updateProduct.update(alteredProduct, { where: { id: Number(productid) } })
      res.json({message:'Product Updated!', ProductUpdated: updateProduct})
    }
  }
}

const deleteProduct = async(req, res) => {
  const { productid } = req.params
  if (!Number(productid)) {
    res.json({message:'Please input a valid numeric value'})
  } else {
    const deletedProduct = await models.Products.findOne({ 
      where: { id: Number(productid) }
      })
    if (!deletedProduct) {
      res.json({message:`Cannot find Product with the id ${productid}`})
    } else {
      deletedProduct.destroy({ where: { id: Number(productid) } })
      res.json({message:'Product Deleted!', ProductDeleted: deletedProduct})
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