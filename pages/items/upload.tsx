import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="flex w-full items-center justify-center cursor-pointer text-gray-500 hover:text-orange-300 hover:border-orange-200 py-12 rounded-md border-2 border-dashed border-gray-300">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-5">
        <label className="text-sm font-medium block mb-1 text-gray-700" htmlFor="price">
          Price
        </label>
        <div className="relative flex items-center shadow-sm rounded-md">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input 
            id="price" 
            type="text" 
            placeholder="0.00" 
            className="appearance-none w-full pl-7 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-orange-500 focus:border-orange-500" />
          <div className="absolute right-0 pr-3 flex items-center justify-center pointer-events-none">
            <span className="text-sm text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium block mb-1 text-gray-700">
          Description
        </label>
        <textarea className="mt-1 resize-none shadow-sm w-full rounded-md border border-gray-300 outline-none focus:ring-orange-500 focus:border-orange-500" rows={4} />
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-400 text-white mt-5 py-2 px-4 outline-none border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-orange-400">
        Upload product
      </button>
    </div>
  );
};

export default Upload;