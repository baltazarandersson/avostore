import Link from "next/dist/client/link";

export function ProductCard(product) {
  return (
    <Link href={`product/${product.id}`}>
      <article className="flex flex-col border-2 border-zinc-200 rounded-xl overflow-hidden min-w-[200px] max-w-[400px] hover:shadow-md hover:-translate-y-1 duration-200 cursor-pointer items-center justify-between">
        <img src={`${product.image}`} alt="avocado" className="w-2/3" />
        <section className="flex flex-col w-full justify-between px-8 pb-4 text-lg items-baseline">
          <h2 className="font-bold text-2xl font-sempione">{product.name}</h2>
          <div>
            <p>
              ${product.price}
              <span className="text-zinc-400 ml-2">per unit</span>
            </p>
          </div>
        </section>
        <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-zinc-50 px-1 rounded-b-xl w-full p-2 ">
          Add to cart
        </button>
      </article>
    </Link>
  );
}
