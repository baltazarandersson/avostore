import React, { useEffect, useState } from "react";
import ProductWrapper from "@components/ProductWrapper/ProductWrapper";

const HomePage = () => {
  const [productList, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProducts(data));
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className="h-full w-full px-0 sm:px-24 py-12">
          <ProductWrapper productList={productList} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
