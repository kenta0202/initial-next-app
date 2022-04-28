import { useAppSelector } from "app/hooks";
import { selectCount, increment, decrement } from "features/countSlice";
import { useDispatch } from "react-redux";

const Count = () => {
  const dispatch = useDispatch();
  const count = useAppSelector(selectCount);
  return (
    <>
      <div className="flex gap-2 text-2xl ">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
};

export default Count;
