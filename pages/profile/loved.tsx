import Layout from "@components/layout";
import ProductList from "@components/product-list";
import type { NextPage } from "next";

const Loved: NextPage = () => {
  return (
    <Layout title="관심상품" canGoBack>
      <div className="flex flex-col pb-10 divide-y-[1px]">
        <ProductList kind="favs" />
      </div>
    </Layout>
  );
};

export default Loved;
