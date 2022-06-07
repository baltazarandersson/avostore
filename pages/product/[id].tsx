import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "components/Navbar/Navbar";

const ProductPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((product) => setProduct(product));
    }
  }, [query.id]);

  return (
    <>
      {product && (
        <section className="grid grid-cols-2 w-full px-24 py-12">
          <article className="flex flex-col gap-4">
            <header className="text-zinc-400 flex gap-4 items-center font-semibold">
              <p>Avocados</p>
              <p className="text-2xl text-zinc-300 font-normal">/</p>
              <p>{product.name}</p>
            </header>
            <h1 className="text-4xl font-sempione">{product.name}</h1>
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
                <button className="w-1/2 p-4 border-2 border-green-500 hover:bg-green-50 transition-colors duration-200 rounded-xl text-left">
                  <h1 className="font-semibold text-xl">6 units</h1>
                  <p className="font-semibold text-zinc-400 text-sm">
                    Perfect for a reasonable amount of guacamole.
                  </p>
                </button>
                <button className="w-1/2 p-4 border-2 border-zinc-200 hover:bg-green-50 transition-colors duration-200 rounded-xl text-left">
                  <h1 className="font-semibold text-xl">12 units</h1>
                  <p className="font-semibold text-zinc-400 text-sm">
                    Enough room for a serious amount of guacamole.
                  </p>
                </button>
              </div>
              <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring focus:ring-green-200 text-zinc-50 px-2 rounded-md w-full p-4 mt-4">
                Add to cart
              </button>
            </form>
          </article>
          <div className="w-full flex items-center justify-center">
            <img className="w-2/3" src={`${product.image}`} alt="avocado" />
          </div>
        </section>
      )}
    </>
  );
};

export default ProductPage;
