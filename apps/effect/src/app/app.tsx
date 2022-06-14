// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getAllProduct } from '@sanber-talk-zahid-01-hooks/shared-service';
import { Product } from '@sanber-talk-zahid-01-hooks/shared-types';
import { useEffect, useState } from 'react';

const ProductRow = ({
  name,
  price,
  isStocked,
}: {
  name: string;
  price: string;
  isStocked: boolean;
}) => {
  const productStyle = {
    color: isStocked ? 'black' : 'red',
  };
  return (
    <tr>
      <td style={productStyle}>{name}</td>
      <td style={productStyle}>{price}</td>
    </tr>
  );
};

export function App() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    getAllProduct().then((res) => setProduct(res));
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isOnlyShowingInStock, setIsOnlyShowingInStock] = useState(false);

  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);

  useEffect(() => {
    const nextFilteredProduct = product.filter((p) => {
      const isNameMatched = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const isInStock = isOnlyShowingInStock ? p.stocked : true;

      return isNameMatched && isInStock;
    });

    setFilteredProduct(nextFilteredProduct);
  }, [searchQuery, isOnlyShowingInStock, product]);

  return (
    <>
      <div>
        <input
          type={'text'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={'Search'}
        />
        <div>
          <input
            type={'checkbox'}
            value={Number(isOnlyShowingInStock)}
            onChange={(e) => setIsOnlyShowingInStock(e.target.checked)}
          />
          <span>Only show products in stock</span>
        </div>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {filteredProduct.map((p) => (
          <ProductRow
            key={p.name}
            name={p.name}
            price={p.price}
            isStocked={p.stocked}
          />
        ))}
      </table>
    </>
  );
}

export default App;
