import type { NextPage } from "next";
import Layout from "@components/layout";
import Item from "@components/item";
import Button from "@components/button";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import useUser from "@libs/client/useUser";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relateProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    //이미 저장되어있는 캐시에서 키값인 "/api/users/me"의 데이터를 조작할 수 있다.
    //mutate("/api/users/me", (prev: any) => ({ ok: !prev.ok }), false);
    //단순히 데이터를 다시 로드(refetch)하려면 mutate("/api/users/me") 사용
    toggleFav({});
  };
  return (
    <Layout title={data?.product?.name} canGoBack>
      <div className="px-5 max-w-lg">
        <div>
          <div className="w-full h-48 bg-gray-400 rounded-md" />
          <div className="flex items-center space-x-2 py-3">
            <div className="aspect-square w-20 rounded-full bg-red-300" />
            <div>
              <p>{data?.product?.user?.name}</p>
              <Link href={`/users/profiles/${data?.product?.user?.id}`}>
                <a className="text-xs font-medium text-gray-500">
                  View profile &rarr;
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h1>{data?.product?.name}</h1>
            <p>${data?.product?.price}</p>
            <p>{data?.product?.description}</p>
            <div className="flex justify-end">
              <Button text="Talk to seller"></Button>

              <button
                onClick={onFavClick}
                className={cls(
                  "flex justify-center  items-center mt-5 ml-1 p-1 border-[1px] rounded-xl",
                  data?.isLiked
                    ? "text-red-500 hover:bg-slate-100  focus:border-indigo-300"
                    : "text-gray-400  hover:bg-slate-100 focus:border-indigo-300"
                )}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2>Similar items</h2>
          <div>
            {data?.relateProducts.map((product) => (
              <Item
                key={product?.id}
                title={product?.name}
                price={product?.price}
                id={product?.id}
                hearts={1}
              ></Item>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
