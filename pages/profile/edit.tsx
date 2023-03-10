import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import type { NextPage } from "next";


const EditProfile: NextPage = () => {

  return (
    <Layout prevPage title="Edit Profile">
      <form className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          {true ? (
            <div
              className="w-14 h-14 rounded-full bg-slate-500"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-slate-500" />
          )}
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border hover:bg-gray-50 border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          required={false}
          label="Name"
          name="name"
          type="text"
        />
        <Input
          required={false}
          label="Email address"
          name="email"
          type="email"
        />
        <Input
          required={false}
          label="Phone number"
          name="phone"
          type="text"
          kind="phone"
        />
        {true ? (
          <span className="my-2 text-red-500 font-medium text-center block">
            에러메세지
          </span>
        ) : null}
        <Button text={true ? "Loading..." : "Update profile"} />
      </form>
    </Layout>
  );
};

export default EditProfile;
