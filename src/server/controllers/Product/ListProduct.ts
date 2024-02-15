import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { Request, Response } from 'express';
import { IProductDTO } from '../../entities/product';
import { ProductService } from '../../services/productService';
import { ProductModel } from '../../schemas/product.schema';

export async function listProducts (req: Request<{}, {}, IProductDTO>, res: Response) {
  const produtos = await ProductModel.find();

  console.log(produtos);
  return res.status(StatusCodes.ACCEPTED).json({produtos});
}