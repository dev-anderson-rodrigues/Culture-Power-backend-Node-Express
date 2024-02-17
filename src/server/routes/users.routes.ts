import { Router } from 'express'
import { validation } from '../middlewares'
import { createUserBodySchema } from '../validators/create-user-body-validator'
import { createUser } from '../controllers/Users/create'
import { UserModel } from '../schemas/user.schema'
import { signinBodySchema } from '../validators/login-body-validator'
import { auth } from '../middlewares/auth'
import { login } from '../controllers/login/login'
import { upload } from '../middlewares/upload'
import { updateUserPhoto } from '../controllers/Users/updatePhoto'
import { reqParamSchema } from '../validators/validationReqParams'

const router = Router()

router.get('/', async (request, response) => {
  const users = await UserModel.find()
  return response.json({ users })
})

router.post(
  '/', auth,
  validation('body', createUserBodySchema),
  createUser
)

router.post('/signin',
  validation('body', signinBodySchema),
  login
)

router.patch('/uploadImage/:_id', auth,
  validation('header', reqParamSchema),
  upload.single('file'), updateUserPhoto
)

export default router
