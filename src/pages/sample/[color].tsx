import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  /* http://localhost:3000/sample/products/red?name=aaaa */
  const { name /* クエリパラメータ */, color /* 動的ページPath */ } = router.query;
  return (
    <>
      <h1 className=" text-gray-500">
        {name}の{color}カラーです
      </h1>
    </>
  );
};
export default Name;
