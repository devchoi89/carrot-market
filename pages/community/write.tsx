import Button from "@components/button";
import TextArea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

interface questionForm {
  question: string;
}

const Write: NextPage = () => {
  const { register, handleSubmit } = useForm<questionForm>();
  const [uploadQuestion, { loading, data }] = useMutation("");
  const onValid = (validForm: questionForm) => {
    uploadQuestion(validForm);
  };
  return (
    <form onSubmit={handleSubmit(onValid)} className="px-4 py-10">
      <TextArea
        register={register("question", { required: true })}
        label="질문 올리기"
        placeholder=""
        name="question"
        required
      ></TextArea>
      <Button text="등록"></Button>
    </form>
  );
};

export default Write;
