import { useCart } from "@store/Cart";
import ItemCard from "./ItemCard";

const Cart = () => {
  const { itemsCount, items, subtotal } = useCart();

  return (
    <div className="h-full w-full px-12 sm:px-24 py-12 gap-8 grow flex flex-col">
      <div className="flex gap-4 items-center">
        <h2 className="text-4xl font-sempione">My cart</h2>
        <p className="text-xl font-semibold text-zinc-400">
          - {itemsCount} item/s
        </p>
      </div>
      {itemsCount > 0 ? (
        <ul className="flex flex-col gap-6 w-full">
          {items.map((item) => {
            return <ItemCard product={item} />;
          })}
          <div className="w-full flex gap-4 items-center justify-between mt-8 px-8 bg-green-100 h-20 rounded-xl">
            <h3 className="font-sempione text-xl sm:text-2xl ">
              Subtotal: {subtotal.toFixed(2)} $
            </h3>
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring focus:ring-blue-200 text-zinc-50 rounded-xl px-2 py-1 sm:px-4 sm:py-2">
              Checkout
            </button>
          </div>
        </ul>
      ) : (
        <div className="w-full flex flex-col md:flex-row gap-4 items-center mt-8 md:py-0 py-4 px-8 bg-orange-100 text-orange-500 md:h-20 rounded-xl">
          <h3 className="font-sempione text-2xl text-center md:text-left">
            Your cart is empty.
          </h3>
          <p className="font-semibold text-xl text-center md:text-left">
            You will need to add some items to the cart before you can checkout.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
