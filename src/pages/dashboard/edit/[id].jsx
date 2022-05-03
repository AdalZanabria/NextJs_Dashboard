import FormProduct from '@components/FormProduct';
import react, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      try {
        const response = await axios.get(endPoints.products.getOne(id));
        if (response) setProduct(response.data);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
    }
    getProduct();
  }, [router?.isReady]);
  return notFound ? (
    <div>
      <h1 className="text-red-500 font-bold text-xl">Product Not Found</h1>
    </div>
  ) : (
    <FormProduct product={product} />
  );
}
