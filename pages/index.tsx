import React, { useEffect, useState } from "react";
import ProductWrapper from "@components/ProductWrapper/ProductWrapper";

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/avo");
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
