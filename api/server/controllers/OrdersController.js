import models from '../src/models'

// res.send x res.json

const getAllOrders = async(req, res) => {
  const allOrders = await models.Orders.findAll({raw:true})
  if(allOrders.length > 0) {
    res.json(allOrders) 
  } else {
    res.json({message:"No Order found"})
  }
}

const addOrders = async(req, res) => {
  if (!req.body.item || !req.body.price || !req.body.type ) {
    res.json({message:'Please provide complete details'})
  } else {
    const newOrders = await models.Orders.create(req.body)
    res.json({message:'Order Added!', OrdersAdded: newOrders})
  }
}

const getOrders = async(req, res) => {
  const { orderid } = req.params
  if (!Number(orderid)) {
    res.json({message:'Please input a valid numeric value'})
  } else {
    const theOrders = await models.Orders.findOne({ 
      where: { id: Number(orderid) }
    })
    if (!theOrders) {
      res.json({message:`Cannot find Orders with the id ${orderid}`})
    } else {
      res.json({message:'Found Order!', OrdersGet: theOrders})
    }
  }
}

const updatedOrders = async(req, res) => {
  const alteredOrders = req.body
  const { orderid } = req.params
  if (!Number(orderid)) {
    res.json({message:'Please input a valid numeric value'})
  } else {
    const updateOrders = await models.Orders.findOne({ 
      where: { id: Number(orderid) }
      })
    if (!updateOrders) {
      res.json({message:`Cannot find Order with the id ${orderid}`})
    } else {
      updateOrders.update(alteredOrders, { where: { id: Number(orderid) } })
      res.json({message:'Orders Updated!', OrdersUpdated: updateOrders})
    }
  }
}

const deleteOrders = async(req, res) => {
  const { orderid } = req.params
  if (!Number(orderid)) {
    res.json({message:'Please input a valid numeric value'})
  } else {
    const deletedOrders = await models.Orders.findOne({ 
      where: { id: Number(orderid) }
      })
    if (!deletedOrders) {
      res.json({message:`Cannot find Order with the id ${orderid}`})
    } else {
      deletedOrders.destroy({ where: { id: Number(orderid) } })
      res.json({message:'Order Deleted!', OrdersDeleted: deletedOrders})
    }
  }
}

export default {
  getAllOrders,
  addOrders,
  getOrders,
  updatedOrders,
  deleteOrders
}