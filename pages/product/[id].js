import { useRouter } from 'next/router';

const Product = () => {

  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Product {router.query.id}</h1>
    </div>
  );
};

export default Product;