import FloatingBtn from "@components/floating-Btn";
import Layout from "@components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Community: NextPage = () => {
  return (
    <Layout title="동네질문" hasTabBar>
      <div className="max-w-lg divide-y-[1px] px-2">
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/community/${i}`} key={i}>
            <a className="cursor-pointer">
              <div className="py-5 flex flex-col">
                <span className="py-1 text-xs px-2 mb-1 bg-slate-200 rounded-l-full rounded-r-full w-fit">
                  동네질문
                </span>
                <span className="font-bold">
                  <span className="text-indigo-300">Q.</span> What is the best
                  mandu restaurant?
                </span>
                <div className="flex justify-between py-3">
                  <span className="text-xs">니꼬</span>
                  <span className="text-xs">18시간 전</span>
                </div>
                <div className="flex">
                  <span className="flex">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-xs pl-1">궁금해요 1</span>
                  </span>
                  <span className="flex pl-5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                    <span className="text-xs pl-1">답변 1</span>
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
        <FloatingBtn
          icon={
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
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          }
          href="/community/write"
        ></FloatingBtn>
      </div>
    </Layout>
  );
};

export default Community;
