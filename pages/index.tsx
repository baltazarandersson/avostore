import React, { useEffect, useState } from "react";
import ProductWrapper from "@components/ProductWrapper/ProductWrapper";

export const getStaticProps = async () => {
  const response = await fetch("https://avostore-baltazar.vercel.app/api/avo");
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

const HomePage = ({ productList }: { productList: TProduct[] }) => {
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
