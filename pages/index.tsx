import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white p-7 rounded-3xl shadow-2xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 first:bg-red-200 last:bg-red-200 only:bg-red-500 odd:text-yellow-500 even:text-lime-500"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$18</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-500 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$98</span>
        </div>
        <div className="flex items-center">
          <button className="mt-4 bg-blue-500 text-white text-center rounded-xl p-3 w-1/2 mx-auto hover:bg-teal-500 active:bg-red-500 focus:text-black">
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl group">
        <div className="bg-blue-500 p-7 pb-20 rounded-t-3xl flex justify-between">
          <span className="text-white font-semibold text-3xl">Profile</span>
        </div>
        <div className="rounded-3xl p-7 bg-white relative -top-10">
          <div className="flex relative -top-16 items-end justify-between ">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-orange-500 rounded-full group-hover:bg-lime-300"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2310</span>
            </div>
          </div>
          <div className="flex flex-col -mt-10 -mb-5 items-center">
            <span className="text-lg font-semibold">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>←</span>
          <div>
            <span>⭐4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-yellow-200 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-1 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-1 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-1 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="rounded-lg pb-1 bg-blue-100 flex justify-center items-center aspect-square w-8 font-semibold text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg pb-1 bg-blue-100 flex justify-center items-center aspect-square w-8 font-semibold text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-3xl">$450</span>
            <button className="bg-blue-500 text-center text-white text-sm py-2 px-7 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
