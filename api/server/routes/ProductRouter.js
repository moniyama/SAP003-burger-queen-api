import { Router } from 'express'
import ProductController from '../controllers/ProductController'

const router = Router()
router.get('/', ProductController.getAllProducts)
// router.get('/:productid', ProductController.getProduct)
router.post('/', ProductController.addProduct)
// router.put('/:productid', ProductController.updatedProduct)
// router.delete('/:productid', ProductController.deleteProduct)
export default router
