import { useCartMutations } from "@store/Cart";
import Link from "next/link";

type ProductType = {
  product: TProduct & { quantity: number };
};

const ItemCard = ({ product }: ProductType) => {
  const { removeFromCart } = useCartMutations();

  if (product === undefined) {
    return <div></div>;
  }

  return (
    <li className="w-full flex flex-col md:flex-row justify-between items-center py-4 md:py-0 px-8 bg-zinc-50 md:h-20 rounded-xl hover:shadow-md hover:-translate-y-1 duration-200">
      <Link href={`product/${product.id}`}>
        <div className="h-full flex items-center gap-8 cursor-pointer">
          <img
            src={product.image}
            alt=""
            className="h-full brightness-[98%] hidden md:block"
          />
          <h3 className="font-sempione text-xl md:text-2xl">{product.name}</h3>
        </div>
      </Link>
      <div className="h-full flex items-center gap-4 md:gap-8 font-semibold text-md md:text-xl">
        <div className="">
          <p>
            {product.quantity} unit{product.quantity > 1 && "s"} -{" "}
            {(product.price * product.quantity).toFixed(2)}$
          </p>
        </div>
        <button
          onClick={() => removeFromCart(product)}
          className="bg-red-400 hover:bg-red-500 active:bg-red-600 focus:ring focus:ring-red-200 text-zinc-50 font-extrabold h-8 w-8 flex items-center justify-center rounded-full"
        >
          -
        </button>
      </div>
    </li>
  );
};

export default ItemCard;
