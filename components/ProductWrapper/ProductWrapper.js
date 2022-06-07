import React from "react";
import { ProductCard } from "./ProductCard";

export default function ProductWrapper({ productList }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
      {productList.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </section>
  );
}
