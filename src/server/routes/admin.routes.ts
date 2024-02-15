import { Router } from 'express';
import { validation } from '../middlewares';
import { signinBodySchema } from '../validators/login-body-validator';
import { auth } from '../middlewares/auth';
import { listProducts } from '../controllers/Product/ListProduct';
import { login } from '../controllers/login/login';
import { createProductBodySchema } from '../validators/create-product-body-validator';
import { createProduct, listProductId } from '../controllers/Product';
import { validationBodyJewels } from '../validators/validationBodyJewels';
import { isAdmin } from '../middlewares/Permission';
import { addJewels } from '../controllers/Admin/AddJewels/AddJewels';
import { reqParamSchema } from '../validators/validationReqParams';
// import { createAdmin } from '../controllers/Admin/create';


const router = Router();

router.post('/signin',
  validation('body', signinBodySchema),
  login,
);
router.patch('/postJewels/:_id',isAdmin,
  validation('params', reqParamSchema),
  validation('body', validationBodyJewels),
  addJewels,
);
router.post('/createProduct',isAdmin,
  validation('body', createProductBodySchema),
  createProduct,
);
// router.get('/listProduct',auth,
//   listProducts,
// );
// router.get('/product/:_id',isAdmin,
//   validation('params', reqParamSchema),
//   listProductId,
// );

export default router;
