import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import Button from "@/components/button";

const Write: NextPage = () => {
  const router = useRouter();
  return (
    <Layout prevPage title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea
          required
          placeholder="Ask a question!"
        />
        <Button text={true ? "Loading..." : "Submit"} />
      </form>
    </Layout>
  );
};

export default Write;
