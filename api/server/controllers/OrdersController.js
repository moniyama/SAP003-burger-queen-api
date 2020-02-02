import models from "../src/models";

const getAllOrders = async (req, res) => {
  const orderItens = await models.ItensOrder.findAll({
    where: { orderId: id }
  });
  const allOrders = await models.Orders.findAll({
    raw: true,
    itens: orderItens 
  });
  if (allOrders.length > 0) {
    res.json((orders = { message: "Orders Found!", allOrders: allOrders }));
  } else {
    res.json((orders = { message: "No Order found" }));
  }
};

const addOrders = async (req, res) => {
  if (
    !req.body.clientName ||
    !req.body.tableNumber ||
    !req.body.is_delivered ||
    !req.body.is_cooked
  ) {
    res.json((orders = { message: "Please provide complete details" }));
  } else {
    const newOrder = await models.Orders.create(req.body);
    res.json((orders = { message: "Order Added!", orderAdded: newOrder }));
  }
};

const getOrders = async (req, res) => {
  const { orderid } = req.params;
  if (!Number(orderid)) {
    res.json({ message: "Please input a valid numeric value" });
  } else {
    const theOrder = await models.Orders.findOne({
      where: { id: Number(orderid) }
    });
    if (!theOrder) {
      res.json(
        (orders = { message: `Cannot find Orders with the id ${orderid}` })
      );
    } else {
      const orderItens = await models.ItensOrder.findAll({
        where: { orderId: orderid }
      });
      res.json((orders = { message: "Found Order!", theOrder: theOrder, itens: orderItens }));
    }
  }
};

const updatedOrders = async (req, res) => {
  const alteredOrders = req.body;
  const { orderid } = req.params;
  if (!Number(orderid)) {
    res.json((orders = { message: "Please input a valid numeric value" }));
  } else {
    const updateOrders = await models.Orders.findOne({
      where: { id: Number(orderid) }
    });
    if (!updateOrders) {
      res.json(
        (orders = { message: `Cannot find Order with the id ${orderid}` })
      );
    } else {
      updateOrders.update(alteredOrders, { where: { id: Number(orderid) } });
      res.json(
        (orders = { message: "Orders Updated!", ordersUpdated: updateOrders })
      );
    }
  }
};

const deleteOrders = async (req, res) => {
  const { orderid } = req.params;
  if (!Number(orderid)) {
    res.json({ message: "Please input a valid numeric value" });
  } else {
    const deletedOrders = await models.Orders.findOne({
      where: { id: Number(orderid) }
    });
    if (!deletedOrders) {
      res.json({ message: `Cannot find Order with the id ${orderid}` });
    } else {
      deletedOrders.destroy({ where: { id: Number(orderid) } });
      res.json({ message: "Order Deleted!", ordersDeleted: deletedOrders });
    }
  }
};

export default {
  getAllOrders,
  addOrders,
  getOrders,
  updatedOrders,
  deleteOrders
};
