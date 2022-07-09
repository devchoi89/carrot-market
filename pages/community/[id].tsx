import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

interface replyForm {
  reply: string;
}

const CommunityPostDetail: NextPage = () => {
  const { register, handleSubmit } = useForm<replyForm>();
  const [reply, { loading, data }] = useMutation("");
  const onValidReply = (onValidForm: replyForm) => {
    reply(onValidForm);
  };
  return (
    <Layout title="동네질문" canGoBack>
      <div className="pb-10 flex flex-col">
        <span className="ml-3 py-1 mb-2 text-xs px-2 bg-slate-200 rounded-l-full rounded-r-full w-fit">
          동네질문
        </span>
        <div className="flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <div className="mt-2 px-4 text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
            <span className="flex space-x-2 items-center text-sm">
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
              <span>궁금해요 1</span>
            </span>
            <span className="flex space-x-2 items-center text-sm">
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
              <span>답변 1</span>
            </span>
          </div>
        </div>
        <div className="px-4 my-5 space-y-5">
          {[1, 1].map((_, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full" />
              <div>
                <span className="text-sm block font-medium text-gray-700">
                  Steve Jebs
                </span>
                <span className="text-xs text-gray-500 block ">2시간 전</span>
                <p className="text-gray-700 mt-2">
                  The best mandu restaurant is the one next to my house.
                </p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit(onValidReply)} className="px-4">
          <TextArea
            register={register("reply", { required: true })}
            name="reply"
          ></TextArea>
          <Button text="답변하기"></Button>
        </form>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
