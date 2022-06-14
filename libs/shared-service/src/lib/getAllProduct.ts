import { Product } from '@sanber-talk-zahid-01-hooks/shared-types';
import product from './product';

export default function getAllProduct() {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    }, 1000);
  });
}
