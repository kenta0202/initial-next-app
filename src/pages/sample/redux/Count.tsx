import { selectCount, increment, decrement } from "features/countSlice";
import { useDispatch, useSelector } from "react-redux";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
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
