import FloatButton from "@/components/float-button";
import Item from "@/components/item";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="홈" isTabBar>
      <title>Home</title>
      <div className="flex flex-col space-y-5 divide-y">
        <FloatButton href="/products/upload">
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
        </FloatButton>
        </div>
    </Layout>
  );
};

export default Home;