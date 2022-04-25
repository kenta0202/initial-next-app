import Link from "next/link";
import React from "react";

function ProductsList() {
  return (
    <div className=" p-1">
      <main className="">
        <h2 className=" text-3xl">商品一覧</h2>
        <ul>
          <li>
            <Link href="./products/smartphone">スマートフォン</Link>
          </li>
          <li>
            <Link href="./products/pc">パソコン</Link>
          </li>
          <li>
            <Link href="./products/headphone">ヘッドホン</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default ProductsList;
