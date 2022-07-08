import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

interface uploadProductForm {
  name: string;
  price: number;
  description: string;
  erorr?: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<uploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");
  const onValid = (validForm: uploadProductForm) => {
    if (loading) return;
    uploadProduct(validForm);
  };
  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`);
    }
  }, [data, router]);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="w-full h-48 flex justify-center items-center rounded-lg cursor-pointer border-2 border-dashed border-red-300">
          <label>
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

            <input type="file" className="hidden" />
          </label>
        </div>
        <div>
          <Input
            register={register("name", { required: true })}
            label="제목"
            name="name"
            type="text"
            kind="text"
            required
          ></Input>
        </div>
        <div>
          <Input
            register={register("price", {
              required: true,
            })}
            label="Price"
            name="price"
            type="text"
            kind="price"
            required
          ></Input>
          <TextArea
            register={register("description", { required: true })}
            label="설명"
            name="description"
            required
          ></TextArea>
          <Button text={loading ? "Loading" : "Upload product"}></Button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
