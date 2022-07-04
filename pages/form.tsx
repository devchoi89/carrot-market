import type { NextPage } from "next";
import { FieldErrors, useForm } from "react-hook-form";
import { useState } from "react";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  error?: string;
}

const Form: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const [result, setResult] = useState("");
  const onValid = (data: LoginForm) => {
    setResult("경) 횐님이 된 걸 축.하.해 (축");
  };
  const onInvalid = (errors: FieldErrors) => {
    setResult("다시 입력해주세요ㅜㅜ");
  };
  return (
    <div className="flex flex-col p-5">
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col max-w-lg space-y-1"
      >
        <h1 className="text-center font-semibold">회원가입</h1>
        <h3>닉네임</h3>
        <input
          {...register("username", {
            required: "닉네임을 입력해 주세요.",
            minLength: {
              message: "닉네임은 3자리 이상 8자리 이하입니다.",
              value: 3,
            },
            maxLength: {
              message: "닉네임은 3자리 이상 8자리 이하입니다.",
              value: 8,
            },
          })}
          type="text"
          className="rounded-lg border-indigo-300 border-2 placeholder:text-gray-400"
          placeholder="멋진 이름으로"
        ></input>
        <span className="text-red-400 text-sm">{errors.username?.message}</span>
        <h3>이메일</h3>
        <input
          {...register("email", {
            required: "이메일을 입력해 주세요.",
            validate: {
              onlyNaver: (value) =>
                value.includes("@naver.com") || "네이버 이메일을 적어주세요.",
            },
          })}
          type="email"
          className="rounded-lg border-indigo-300 border-2 placeholder:text-gray-400"
          placeholder="네이버 이메일"
        ></input>
        <span className="text-red-400 text-sm">{errors.email?.message}</span>
        <h3>비밀번호</h3>
        <input
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            minLength: {
              message: "비밀번호는 8자리 이상 20자리 이하입니다.",
              value: 8,
            },
            maxLength: {
              message: "비밀번호는 8자리 이상 20자리 이하입니다.",
              value: 20,
            },
          })}
          type="password"
          className="rounded-lg border-indigo-300 border-2 placeholder:text-gray-400"
          placeholder="비밀번호는 8자리 이상 20자리 이하"
        ></input>
        <span className="text-red-400 text-sm">{errors.password?.message}</span>
        <button
          type="submit"
          className="rounded-lg bg-indigo-300 py-2 text-white"
        >
          가입하기
        </button>
        <span className="text-center text-indigo-500">{result}</span>
      </form>
    </div>
  );
};

export default Form;
