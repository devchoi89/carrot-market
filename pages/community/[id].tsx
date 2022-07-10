import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { Answer, Post, User } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface AnswerForm {
  answer: string;
}

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    wards: number;
  };
  answers: AnswerWithUser[];
}

interface PostResponse {
  ok: boolean;
  post: PostWithUser;
  isWard: boolean;
}

interface AnswerResponse {
  ok: boolean;
  answer: Answer;
}

const CommunityPostDetail: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  //들어오는 url쿼리를 사용하여 데이터베이스에 정보를 요청
  const { data, mutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [ward, { loading }] = useMutation(`/api/posts/${router.query.id}/ward`);
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answer`);
  const onWardClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data?.post,
          _count: {
            ...data?.post._count,
            wards: data.isWard
              ? data?.post._count.wards - 1
              : data?.post._count.wards + 1,
          },
        },
        isWard: !data.isWard,
      },
      false
    );
    if (!loading) {
      ward({});
    }
  };
  const onValidAnswer = (onValidForm: AnswerForm) => {
    if (answerLoading) return;
    sendAnswer(onValidForm);
  };
  useEffect(() => {
    if (data && !data.ok) {
      router.push("/404");
    }
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, data, router]);
  console.log(data?.post);
  return (
    <Layout title="동네질문" canGoBack>
      <div className="pb-10 flex flex-col">
        <span className="ml-3 py-1 mb-2 text-xs px-2 bg-slate-200 rounded-l-full rounded-r-full w-fit">
          동네질문
        </span>
        <div className="flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {data?.post?.user?.name}
            </p>
            <Link href={`/users/profiles/${data?.post?.user?.id}`}>
              <a className="text-xs font-medium text-gray-500">View profile</a>
            </Link>
          </div>
        </div>
        <div>
          <div className="mt-2 px-4 text-sm text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span>{" "}
            {data?.post?.question}
          </div>
          <div className="text-right mt-2 px-4 text-xs text-gray-700">
            {data?.post?.createdAt?.toString()}
          </div>
          <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
            <button
              onClick={onWardClick}
              className={cls(
                "cursor-pointer flex space-x-2 items-center text-sm",
                data?.isWard ? "text-teal-400" : ""
              )}
            >
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
              <span>궁금해요 {data?.post?._count?.wards}</span>
            </button>
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
              <span>답변 {data?.post?._count?.answers}</span>
            </span>
          </div>
        </div>
        <div className="px-4  divide-y-[1px]">
          {data?.post?.answers.map((answer) => (
            <div key={answer?.id} className="py-5">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full" />
                <div>
                  <span className="text-sm block font-medium text-gray-700">
                    {answer?.user?.name}
                  </span>
                  <p className="text-gray-700 mt-2 text-sm">{answer?.answer}</p>
                </div>
              </div>
              <span className="text-right text-xs text-gray-500 block">
                {answer?.createdAt?.toString()}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit(onValidAnswer)} className="px-4">
          <TextArea
            register={register("answer", { required: true, minLength: 5 })}
            name="answer"
          ></TextArea>
          <Button text={answerLoading ? "로딩중..." : "답변하기"}></Button>
        </form>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
