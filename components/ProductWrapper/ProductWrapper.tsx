import React from "react";
import { ProductCard } from "./ProductCard";

type ProductListType = {
  productList: TProduct[];
};

export default function ProductWrapper({ productList }: ProductListType) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
      {productList.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </section>
  );
}
