import { Router } from 'express'
import { upload, validation } from '../middlewares'
import { auth } from '../middlewares/auth'
import { listProducts } from '../controllers/Product/ListProduct'
import { listProductId } from '../controllers/Product'
import { reqParamSchema } from '../validators/validationReqParams'
import { RedeemProductId } from '../controllers/Product/RedeemProduct'
import { uploadProductPhoto } from '../controllers/Product/uploadPhoto'

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
router.patch('/uploadImage/:_id', auth,
  validation('header', reqParamSchema),
  upload.single('file'), uploadProductPhoto
)
export default router
