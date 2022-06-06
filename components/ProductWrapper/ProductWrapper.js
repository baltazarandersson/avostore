import React from "react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

export default function ProductWrapper({ productList }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {productList.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </section>
  );
}
