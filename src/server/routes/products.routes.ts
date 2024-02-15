import { Router } from 'express';
import { validation } from '../middlewares';
import { createUserBodySchema } from '../validators/create-user-body-validator';
import { createUser } from '../controllers/Users/create';
import { UserModel } from '../schemas/user.schema';
import { signinBodySchema } from '../validators/login-body-validator';
import { auth } from '../middlewares/auth';
import { listProducts } from '../controllers/Product/ListProduct';
import { login } from '../controllers/login/login';
import { createProduct, listProductId } from '../controllers/Product';
import { reqParamSchema } from '../validators/validationReqParams';
import { isAdmin } from '../middlewares/Permission';
import { createProductBodySchema } from '../validators/create-product-body-validator';
import { RedeemProductId } from '../controllers/Product/RedeemProduct';
// import { IsAdmin } from '../middlewares/SigninVerification';


const router = Router();

router.get('/listProduct',auth,
  listProducts,
);
router.get('/:_id',auth,
  validation('params', reqParamSchema),
  listProductId,
);
router.post('/RedeemProduct/:_id',
  validation('params', reqParamSchema),
  RedeemProductId,
);
export default router;