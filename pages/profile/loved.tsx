import Layout from "@/components/layout";
import type { NextPage } from "next";


const Loved: NextPage = () => {
  return (
    <Layout title="관심목록" prevPage>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        상품목록
      </div>
    </Layout>
  );
};

export default Loved;
