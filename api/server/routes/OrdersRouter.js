import { Router } from 'express'
import OrdersController from '../controllers/OrdersController'

const router = Router()
router.get('/', OrdersController.getAllOrders)
router.get('/:orderid', OrdersController.getOrders)
router.post('/', OrdersController.addOrders)
router.put('/:orderid', OrdersController.updatedOrders)
router.delete('/:orderid', OrdersController.deleteOrders)
export default router
