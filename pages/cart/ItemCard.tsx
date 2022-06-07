import { useCartMutations } from "@store/Cart";
import Link from "next/link";

const ItemCard = ({ product }) => {
  const { removeFromCart } = useCartMutations();

  return (
    <li className="w-full flex justify-between items-center px-8 bg-zinc-50 h-20 rounded-xl hover:shadow-md hover:-translate-y-1 duration-200">
      <Link href={`product/${product.id}`}>
        <div className="h-full flex items-center gap-8 cursor-pointer">
          <img
            src={product.image}
            alt=""
            className="h-full brightness-[98%] hidden sm:block"
          />
          <h3 className="font-sempione text-xl sm:text-2xl">{product.name}</h3>
        </div>
      </Link>
      <div className="h-full flex items-center gap-4 sm:gap-8 font-semibold text-md sm:text-xl">
        <div>
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
