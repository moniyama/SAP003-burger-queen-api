import models from '../src/models'

const getAllProducts = async(req, res) => {
  const allProducts = await models.Menu.findAll({raw:true})
  if(allProducts.length > 0) {
    res.send(allProducts) 
  } else {
    res.send({message:"No Products found"})
  }
}

const addProduct = async(req, res) => {
  if (!req.body.item || !req.body.price || !req.body.type ) {
    res.send({message:'Please provide complete details'})
  } else {
    const newProduct = await models.Menu.create(req.body)
    res.send({message:'Product Added!', ProductAdded: newProduct})
  }
}

const getProduct = async(req, res) => {
  const { productid } = req.params
  if (!Number(productid)) {
    res.send({message:'Please input a valid numeric value'})
  } else {
    const theProduct = await models.Menu.findOne({ 
      where: { id: Number(productid) }
    })
    if (!theProduct) {
      res.send({message:`Cannot find Product with the id ${productid}`})
    } else {
      res.send({message:'Found Product!', ProductGet: theProduct})
    }
  }
}

const updatedProduct = async(req, res) => {
  const alteredProduct = req.body
  const { productid } = req.params
  if (!Number(productid)) {
    res.send({message:'Please input a valid numeric value'})
  } else {
    const updateProduct = await models.Menu.findOne({ 
      where: { id: Number(productid) }
      })
    if (!updateProduct) {
      res.send({message:`Cannot find Product with the id ${productid}`})
    } else {
      updateProduct.update(alteredProduct, { where: { id: Number(productid) } })
      res.send({message:'Product Updated!', ProductUpdated: updateProduct})
    }
  }
}

const deleteProduct = async(req, res) => {
  const { productid } = req.params
  if (!Number(productid)) {
    res.send({message:'Please input a valid numeric value'})
  } else {
    const deletedProduct = await models.Menu.findOne({ 
      where: { id: Number(productid) }
      })
    if (!deletedProduct) {
      res.send({message:`Cannot find Product with the id ${productid}`})
    } else {
      deletedProduct.destroy({ where: { id: Number(productid) } })
      res.send({message:'Product Deleted!', ProductDeleted: deletedProduct})
    }
  }
}

export default { getAllProducts, addProduct , getProduct , updatedProduct , deleteProduct }