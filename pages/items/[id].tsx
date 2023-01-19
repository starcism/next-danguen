import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <div className="h-96 bg-slate-300"/>
        <div className="flex py-3 border-t border-b items-center cursor-pointer space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300"/>
          <div>
            <p className="text-sm font-medium text-gray-700">Elon Musk</p>
            <p className="text-sm font-medium text-gray-500">프로필 보기 &rarr;</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-gray-900">GOOODS</h1>
          <p className="text-3xl block mt-3 text-gray-900">$500</p>
          <p className="text-base my-6 text-gray-700">
            Introduction Post
          </p>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 bg-orange-500 text-white py-3 mx-5 rounded-lg font-medium hover:bg-orange-400 focus:outline-none">
              판매자와 대화하기
            </button>
            <button className="flex p-3 rounded-full justify-center items-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <svg
                className="h-6 w-6 "
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
        <div className="grid grid-cols-2 mt-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-4 bg-red-100"/>
              <h3 className="text-base text-gray-700">iPhone 14 Pro Max</h3>
              <p className="text-sm font-semibold -mb-1 text-gray-900">$1000</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;