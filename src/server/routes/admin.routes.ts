import { Router } from 'express'
import { validation } from '../middlewares'
import { signinBodySchema } from '../validators/login-body-validator'
import { login } from '../controllers/login/login'
import { createProductBodySchema } from '../validators/create-product-body-validator'
import { createProduct, listProductId } from '../controllers/Product'
import { validationBodyJewels } from '../validators/validationBodyJewels'
import { isAdmin } from '../middlewares/Permission'
import { addJewels } from '../controllers/Admin/AddJewels/AddJewels'
import { reqParamSchema } from '../validators/validationReqParams'
import { auth } from '../middlewares/auth'
import { searchLoggedinUser } from '../controllers/Users/searchLogged-inUser'
import { UpdatedProduct } from '../controllers/Product/updateProducts'

const router = Router()

router.get('/', auth, isAdmin, searchLoggedinUser)

router.post('/signin',
  validation('body', signinBodySchema),
  login
)
router.patch('/postJewels/:_id', auth, isAdmin,
  validation('params', reqParamSchema),
  validation('body', validationBodyJewels),
  addJewels
)
router.post('/createProduct', auth, isAdmin,
  validation('body', createProductBodySchema),
  createProduct
)
router.put('/updateProduct/:_id', auth, isAdmin,
  validation('params', reqParamSchema),
  UpdatedProduct
)

export default router
