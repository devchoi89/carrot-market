import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import { Post } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface QuestionForm {
  question: string;
}

interface QuestionResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<QuestionForm>();
  const [post, { loading, data }] = useMutation<QuestionResponse>("/api/posts");
  const onValid = (validForm: QuestionForm) => {
    if (loading) return;
    post(validForm);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
    console.log(data);
  }, [data, router]);
  return (
    <Layout title="질문하기" canGoBack>
      <form
        onSubmit={handleSubmit(onValid)}
        className="px-4 pb-10 max-w-lg w-full"
      >
        <TextArea
          register={register("question", { required: true, minLength: 10 })}
          placeholder="질문 내용 10자 이상"
          name="question"
          required
        ></TextArea>
        <Button text={loading ? "업로드 중" : "등록"}></Button>
      </form>
    </Layout>
  );
};

export default Write;
