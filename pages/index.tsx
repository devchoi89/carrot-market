import type { NextPage } from "next";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import Head from "next/head";
import useSWR from "swr";
import { Product } from "@prisma/client";
import Item from "@components/item";
import FloatingBtn from "@components/floating-btn";

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductWithCount[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data, error } = useSWR<ProductsResponse>("/api/products");
  console.log(data);
  return (
    <Layout title="홈" hasTabBar>
      <Head>
        <title>홈</title>
      </Head>
      <div className="max-w-lg divide-y-[1px] pb-5">
        {data?.products?.map((product) => (
          <Item
            key={product.id}
            title={product.name}
            price={product.price}
            id={product.id}
            hearts={product._count.favs}
          ></Item>
        ))}
        <FloatingBtn
          icon={
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          }
          href="/products/upload"
        ></FloatingBtn>
      </div>
      <button className="hover:outline-dashed outline-offset-2 outline-gray-400 outline-2 py-1 px-4 rounded-r-full rounded-l-full  bg-pink-500 text-sm text-white font-bold ">
        구입
      </button>
    </Layout>
  );
};

export default Home;
