import Layout from "@/components/layout";
import type { NextPage } from "next";

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" prevPage>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        상품목록
      </div>
    </Layout>
  );
};

export default Sold;
