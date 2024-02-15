import { ProductService } from '../../services/productService';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export async function listProductId (req: Request, res: Response) {

  const productService = new ProductService();
  const { _id } = req.params;

  const produtos = await productService.ListProductId(_id);

  console.log();
  return res.status(StatusCodes.ACCEPTED).json({produtos});
}