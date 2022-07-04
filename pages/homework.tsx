import type { NextPage } from "next";

const Homework: NextPage = () => {
  return (
    <div className="flex justify-center bg-pink-50 font-['-apple-system']">
      <div className="bg-pink-50 min-h-screen grid gap-10 p-20 lg:grid-cols-2 xl:grid-cols-3">
        <div className="bg-white px-5 py-10 max-w-sm">
          <span className="font-bold my-3 text-5xl">Weather</span>
          <div className="flex p-4 my-5 justify-between items-center rounded-xl border-2 border-black border-b-8">
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl">Seoul</span>
              <span className="font-bold text-xs">Korea, 10PM</span>
            </div>
            <div className="flex justify-center items-center">
              <span>
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <span className="font-extrabold text-5xl">30°</span>
            </div>
          </div>
          <div className="flex p-4 my-5 bg-yellow-500 justify-between items-center rounded-xl border-2 border-black border-b-8">
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl">Tokyo</span>
              <span className="font-bold text-xs">Japan, 10PM</span>
            </div>
            <div className="flex justify-center items-center">
              <span>
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <span className="font-extrabold text-5xl">32°</span>
            </div>
          </div>
          <div className="flex p-4 my-5 bg-teal-500 justify-between items-center rounded-xl border-2 border-black border-b-8">
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl">London</span>
              <span className="font-bold text-xs">UK, 2AM</span>
            </div>
            <div className="flex justify-center items-center">
              <span>
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </span>
              <span className="font-extrabold text-5xl">19°</span>
            </div>
          </div>
          <div className="flex p-4 my-5 bg-red-500 text-white justify-between items-center rounded-xl border-2 border-black border-b-8">
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl">New York</span>
              <span className="font-bold text-xs">USA, 12AM</span>
            </div>
            <div className="flex justify-center items-center">
              <span>
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <span className="font-extrabold text-5xl">28°</span>
            </div>
          </div>
          <div className="w-14 h-14 pb-2 mt-10 mx-auto flex justify-center items-center rounded-full border-2 border-black border-b-4 ">
            <span className="font-bold text-3xl">+</span>
          </div>
        </div>
        <div className="bg-white px-5 py-10 max-w-sm">
          <div className="w-10 h-10 pb-2 flex justify-center items-center rounded-full border-2 border-black border-b-4 ">
            <span className="font-bold text-3xl">×</span>
          </div>
          <div className="font-extrabold text-sm mb-3 text-center text-gray-600">
            <span>SIMPLE TAG</span>
          </div>
          <div className="font-bold mb-10 text-4xl text-center">
            <span>Work with best designers</span>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="h-40 rounded-xl bg-yellow-500 flex justify-center items-center text-white border-2 border-black">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="h-40 rounded-xl bg-teal-500 flex justify-center items-center text-white border-2 border-black">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="h-40 rounded-xl bg-pink-300 flex justify-center items-center text-white border-2 border-black">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="h-40 rounded-xl bg-red-400 flex justify-center items-center text-white border-2 border-black">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="rounded-2xl bg-blue-600 font-bold text-xl p-3  text-white text-center">
            <span>Let' get it done</span>
          </div>
        </div>
        <div className="bg-yellow-500 px-5 py-10 max-w-sm">
          <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full border-2 border-black border-b-4 ">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="text-center relative -top-10">
            <span className="font-bold text-3xl">Friends</span>
          </div>
          <div className="flex justify-between bg-white p-3 mb-5 border-2 border-b-8 border-black rounded-xl">
            <span>Search with love ...</span>
            <span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
          <div className="flex justify-between items-center p-3 mb-5 border-2 border-black rounded-xl bg-white">
            <div className="flex">
              <div className="w-14 h-14 mr-3 rounded-full border-2 border-black bg-orange-500"></div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl">Bill Rizer</span>
                <span className="text-sm text-gray-600">Planet Designer</span>
              </div>
            </div>
            <div className="h-10 flex justify-center px-4 font-bold text-sm rounded-xl items-center border-2 border-black border-b-4 bg-yellow-500">
              <span>Invite</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 mb-5 border-2 border-black rounded-xl bg-white">
            <div className="flex">
              <div className="w-14 h-14 mr-3 rounded-full border-2 border-black bg-teal-500"></div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl">Genbei Yagy</span>
                <span className="text-sm text-gray-600">Planet Designer</span>
              </div>
            </div>
            <div className="h-10 flex justify-center px-4 font-bold text-sm rounded-xl items-center border-2 border-black border-b-4 bg-yellow-500">
              <span>Invite</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 mb-5 border-2 border-black rounded-xl bg-white">
            <div className="flex">
              <div className="w-14 h-14 mr-3 rounded-full border-2 border-black bg-orange-500"></div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl">Lancy Neo</span>
                <span className="text-sm text-gray-600">Rogue Corp</span>
              </div>
            </div>
            <div className="h-10 flex justify-center px-4 font-bold text-sm rounded-xl items-center border-2 border-black border-b-4 bg-yellow-500">
              <span>Invite</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 mb-5 border-2 border-black rounded-xl bg-white">
            <div className="flex">
              <div className="w-14 h-14 mr-3 rounded-full border-2 border-black bg-yellow-500"></div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl">Bill Rizer</span>
                <span className="text-sm text-gray-600">Hard Cops</span>
              </div>
            </div>
            <div className="h-10 flex justify-center px-4 font-bold text-sm rounded-xl items-center border-2 border-black border-b-4 bg-yellow-500">
              <span>Invite</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 mb-5 border-2 border-black rounded-xl bg-white">
            <div className="flex">
              <div className="w-14 h-14 mr-3 rounded-full border-2 border-black bg-pink-400"></div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl">Konami</span>
                <span className="text-sm text-gray-600">Xenon Creator</span>
              </div>
            </div>
            <div className="h-10 flex justify-center px-4 font-bold text-sm rounded-xl items-center border-2 border-black border-b-4 bg-yellow-500">
              <span>Invite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework;
