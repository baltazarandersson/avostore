type CounterProps = {
  count: number;
  increase: Function;
  decrease: Function;
};

const Counter = ({ count, increase, decrease }: CounterProps) => {
  return (
    <div className="flex gap-2 text-xl items-center grow justify-between">
      <button
        onClick={() => increase()}
        className="w-8 h-8 bg-green-100 hover:bg-green-200 active:bg-green-300 font-semibold rounded-full"
      >
        +
      </button>
      <div className="font-bold text-2xl">{count}</div>
      <button
        onClick={() => decrease()}
        className="w-8 h-8 bg-orange-100 hover:bg-orange-200 active:bg-orange-300  font-semibold rounded-full"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
