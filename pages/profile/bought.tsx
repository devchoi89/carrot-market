import Layout from "@components/layout";
import ProductList from "@components/product-list";
import type { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <Layout title="구매상품" canGoBack>
      <div className="flex flex-col divide-y-[1px] pb-10">
        <ProductList kind="purchases" />
      </div>
    </Layout>
  );
};

export default Bought;
