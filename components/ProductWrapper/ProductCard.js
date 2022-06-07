import Link from "next/dist/client/link";
import { useState } from "react";
import Counter from "./Counter";
import { useCartMutations } from "@store/Cart";

export function ProductCard(product) {
  const [count, updateCount] = useState(0);
  const { addToCart } = useCartMutations();

  function increaseCount() {
    updateCount((prevCount) => prevCount + 1);
  }
  function decreaseCount() {
    if (count > 0) {
      updateCount((prevCount) => prevCount - 1);
    }
  }

  function handleAddToCart() {
    if (count > 0) {
      addToCart(product, count);
    }
  }

  return (
    <article className="flex flex-col border-2 border-zinc-200 rounded-xl overflow-hidden min-w-[200px] max-w-[400px] hover:shadow-md hover:-translate-y-1 duration-200 items-center justify-between pb-4">
      <Link href={`product/${product.id}`}>
        <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
          <img src={`${product.image}`} alt="avocado" className="w-2/3" />
          <section className="flex flex-col w-full justify-between px-8 pb-4 text-lg items-baseline">
            <h2 className="font-bold text-2xl font-sempione">{product.name}</h2>

            <p>
              ${product.price}
              <span className="text-zinc-400 ml-2">per unit</span>
            </p>
          </section>
        </div>
      </Link>
      <section className="w-full h-full flex justify-between items-center px-8 gap-8">
        <Counter
          count={count}
          increase={increaseCount}
          decrease={decreaseCount}
        />
        <button
          className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring focus:ring-green-200 text-zinc-50 rounded-xl w-1/2 p-2"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </section>
    </article>
  );
}
