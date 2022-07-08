import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import Button from "@components/button";
import Input from "@components/input";
import { useRouter } from "next/router";

interface LoginForm {
  email: string;
  phone: string;
  errors?: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

export default function Enter() {
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/users/confirm");
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    setMethod("email");
    reset();
  };
  const onPhoneClick = () => {
    setMethod("phone");
    reset();
  };
  const { register, handleSubmit, reset } = useForm<LoginForm>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const onValid = (validForm: LoginForm) => {
    if (loading) return;
    enter(validForm);
  };
  const onInvalid = (errors: FieldErrors) => {};

  const onTokenValid = (validForm: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };

  const router = useRouter();
  useEffect(() => {
    if (tokenData?.ok) {
      router.push("/");
    }
  }, [tokenData, router]);
  return (
    <div>
      <h3 className="font-semibold text-2xl text-center mt-5">구리 마켓</h3>
      <img className="w-20 h-20 rounded-full mx-auto" src="/guri.gif" />
      <div>
        {data?.ok ? (
          <form className="p-3" onSubmit={tokenHandleSubmit(onTokenValid)}>
            <Input
              register={tokenRegister("token", {
                required: "토큰을 입력해주세요.",
              })}
              label="Confirmation Token"
              name="token"
              type="number"
              kind="text"
              required
            ></Input>
            <Button text={tokenLoading ? "로그인 중" : "Confirm Token"} />
          </form>
        ) : (
          <>
            <div className="text-center">
              <h5 className="py-5">로그인</h5>
              <div className="grid grid-cols-2 w-full">
                <button
                  className={cls(
                    "border-b-2",
                    method === "email"
                      ? "text-white bg-indigo-400 border-indigo-400 rounded-t-xl"
                      : "text-indigo-400 border-transparent"
                  )}
                  onClick={onEmailClick}
                >
                  Email
                </button>
                <button
                  className={cls(
                    "border-b-2",
                    method === "phone"
                      ? "text-white bg-indigo-400 border-indigo-400 rounded-t-xl"
                      : "text-indigo-400 border-transparent"
                  )}
                  onClick={onPhoneClick}
                >
                  Phone
                </button>
              </div>
            </div>
            <form className="p-3" onSubmit={handleSubmit(onValid, onInvalid)}>
              {method === "email" ? (
                <Input
                  register={register("email", {
                    required: "이메일 주소를 입력해 주세요.",
                  })}
                  label="이메일 주소"
                  name="email"
                  type="email"
                  kind="text"
                  required
                ></Input>
              ) : null}
              {method === "phone" ? (
                <Input
                  register={register("phone", {
                    required: "전화번호를 입력해 주세요.",
                  })}
                  label="전화번호"
                  name="phone"
                  type="number"
                  kind="phone"
                  required
                ></Input>
              ) : null}

              {method === "email" ? (
                <Button text={loading ? "로그인 중" : "Get login link"} />
              ) : null}
              {method === "phone" ? (
                <Button
                  text={loading ? "로그인 중" : "Get one-time password"}
                />
              ) : null}
            </form>
          </>
        )}
        <div>
          <div>
            <div />
            <div className="text-center p-2">
              <span>Or enter with</span>
            </div>
          </div>
          <div className="flex">
            <button className="hover:bg-red-400 hover:text-white w-1/2 py-2 border-2 rounded-md shadow-md flex justify-center">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="hover:bg-red-400 hover:text-white w-1/2 py-2 border-2 rounded-md shadow-md flex justify-center">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
