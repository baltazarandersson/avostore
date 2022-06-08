import React, { useState } from "react";
import { useCartMutations } from "@store/Cart";
import { GetStaticProps } from "next";

const defaultAmount = 6;
const selectedOptionStyles = "border-green-500 bg-green-50 cursor-default";
const defaultOptionStyles = "border-zinc-200 hover:bg-green-50";

export const getStaticPaths = async () => {
  const response = await fetch("https://avostore-baltazar.vercel.app/api/avo");
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({
    params: {
      id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(
    `https://avostore-baltazar.vercel.app/api/avo/${id}`
  );

  const product: TProduct = await response.json();
  return {
    props: {
      product,
    },
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  const [selectedAmount, setAmount] = useState<number>(defaultAmount);
  const { addToCart } = useCartMutations();

  function updateSelectedAmount(number: number) {
    setAmount(number);
  }

  function handleAddToCart() {
    addToCart(product, selectedAmount);
  }

  return (
    <>
      {product && (
        <section className="flex w-full px-12 sm:px-24 py-12">
          <article className="flex flex-col gap-4 lg:w-1/2 w-full">
            <header className="text-zinc-400 hidden sm:flex gap-4 items-center font-semibold">
              <p>Avocados</p>
              <p className="text-2xl text-zinc-300 font-normal">/</p>
              <p>{product.name}</p>
            </header>
            <h1 className="md:text-4xl font-sempione w-full text-3xl">
              {product.name}
            </h1>
            <section className="flex gap-4 font-semibold">
              <p className="text-xl">
                ${product.price}
                <span className="text-zinc-400 ml-4">per unit</span>
              </p>
            </section>
            <section>
              <p className="text-zinc-800/60 font-semibold">
                {product.attributes.description}
              </p>
            </section>
            <section>
              <p className="text-zinc-400 text-sm font-semibold">
                In stock, ready to ship
              </p>
            </section>
            <form
              action="sumbit"
              className="w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="font-semibold text-zinc-500 mb-2 mt-4">Size</p>
              <div className="w-full flex gap-4">
                <button
                  className={`w-1/2 p-4 border-2 transition-colors duration-200 rounded-xl text-left ${
                    selectedAmount === 6
                      ? selectedOptionStyles
                      : defaultOptionStyles
                  }`}
                  onClick={() => updateSelectedAmount(6)}
                >
                  <h1 className="font-semibold text-xl">6 units</h1>
                  <p className="font-semibold text-zinc-400 text-sm">
                    Perfect for a reasonable amount of guacamole.
                  </p>
                </button>
                <button
                  className={`w-1/2 p-4 border-2 transition-colors duration-200 rounded-xl text-left ${
                    selectedAmount === 12
                      ? selectedOptionStyles
                      : defaultOptionStyles
                  }`}
                  onClick={() => updateSelectedAmount(12)}
                >
                  <h1 className="font-semibold text-xl">12 units</h1>
                  <p className="font-semibold text-zinc-400 text-sm">
                    Enough room for a serious amount of guacamole.
                  </p>
                </button>
              </div>
              <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring focus:ring-green-200 text-zinc-50 px-2 rounded-md w-full p-4 mt-4"
                onClick={() => handleAddToCart()}
              >
                Add to cart
              </button>
            </form>
          </article>
          <div className="lg:flex items-center justify-center w-1/2 hidden">
            <img className="w-2/3" src={`${product.image}`} alt="avocado" />
          </div>
        </section>
      )}
    </>
  );
};

export default ProductPage;
