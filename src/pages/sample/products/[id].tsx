/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { /* GetServerSideProps ,*/ GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Image from "next/image";

// Paramsの型
interface TParams extends ParsedUrlQuery {
  id: string;
}

// Propsの型
type TItem = {
  id: string;
  name: string;
  image: string;
};
type TProps = {
  product: TItem;
};

// SSGの場合
export const getStaticProps: GetStaticProps<TProps, TParams> = async ({ params }) => {
  // ビルド時にデータを取得
  // const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const req = await fetch(`${process.env.HOST}/api/products/${params.id}`);
  const data: TItem = await req.json();
  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};

// SSGにはPathを指定する必要もある

export const getStaticPaths: GetStaticPaths = () => {
  const data = ["smartphone", "pc", "headphone"];

  const paths = data.map((product) => {
    return {
      params: {
        id: product,
      },
    };
  });

  return {
    paths,
    // pathで設定されていないものは404
    fallback: false,
  };
};

// export const getServerSideProps: GetServerSideProps<TProps, TParams> = async ({ params }) => {
//     // リクエスト時にデータを取得
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data: TItem = await req.json();
//     console.log(data);

//     return {
//       props: {
//         product: data,
//       },
//     };
//   };

const Product: React.FC<TProps> = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className=" text-center">
      <main className=" p-5">
        <h2 className=" text-2xl">{id}のページです</h2>
        {product.image?.length > 0 && <Image src={product.image} width={300} height={400} />}

        <p>{product.name}</p>
        <Link href="../products">商品一覧へ</Link>
      </main>
    </div>
  );
};

export default Product;
