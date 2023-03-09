import { IProduct } from './interfaces';

type HeadProps = Record<string, never>;

type IProductProps = {
  product: IProduct;
};

export { HeadProps, IProductProps };
