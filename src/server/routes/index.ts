// import { StatusCodes } from 'http-status-codes';
import { Router } from 'express';
import usersRoutes from './users.routes';
import productRoutes from './products.routes';
import adminRoutes from './admin.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/admin', adminRoutes);
routes.use('/products', productRoutes);
// routes.use('/auth', authRoutes)

export default routes;
