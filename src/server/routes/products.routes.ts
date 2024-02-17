import { Router } from 'express'
import { validation } from '../middlewares'
import { auth } from '../middlewares/auth'
import { listProducts } from '../controllers/Product/ListProduct'
import { listProductId } from '../controllers/Product'
import { reqParamSchema } from '../validators/validationReqParams'
import { RedeemProductId } from '../controllers/Product/RedeemProduct'

const router = Router()

router.get('/listProduct', auth,
  listProducts
)
router.get('/:_id', auth,
  validation('params', reqParamSchema),
  listProductId
)
router.post('/RedeemProduct/:_id', auth,
  validation('params', reqParamSchema),
  RedeemProductId
)
export default router
