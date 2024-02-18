import { Router } from 'express'
import { validation } from '../middlewares'
import { createUserBodySchema } from '../validators/create-user-body-validator'
import { createUser } from '../controllers/Users/create'
import { UserModel } from '../schemas/user.schema'
import { signinBodySchema } from '../validators/login-body-validator'
import { auth } from '../middlewares/auth'
import { login } from '../controllers/login/login'
import { upload } from '../middlewares/upload'
import { uploadUserPhoto } from '../controllers/Users/uploadPhoto'
import { reqParamSchema } from '../validators/validationReqParams'
import { searchLoggedinUser } from '../controllers/Users/searchLogged-inUser'

const router = Router()

router.get('/', auth, searchLoggedinUser)

router.post(
  '/',
  validation('body', createUserBodySchema),
  createUser
)

router.post('/signin',
  validation('body', signinBodySchema),
  login
)

router.patch('/uploadImage/:_id', auth,
  validation('header', reqParamSchema),
  upload.single('file'), uploadUserPhoto
)

export default router
