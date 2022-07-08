import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type: string;
  kind?: "text" | "phone" | "price";
  required: boolean;
  register: UseFormRegisterReturn;
}

export default function Input({
  label,
  name,
  type,
  kind = "text",
  required,
  register,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm">
        {label}
      </label>

      {kind === "text" ? (
        <input
          {...register}
          id={name}
          type={type}
          required={required}
          className={
            " appearance-none w-full  rounded-md border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-pink-200 focus:border-pink-200"
          }
        />
      ) : null}
      {kind === "phone" ? (
        <div className="flex">
          <span className="flex items-center justify-center shadow-md px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            {...register}
            id={name}
            type={type}
            required={required}
            className="appearance-none w-full rounded-r-md shadow-md border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-pink-200 focus:border-pink-200"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="flex">
          <span className="flex items-center justify-center shadow-md px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            $
          </span>
          <input
            {...register}
            id={name}
            type={type}
            required={required}
            className="appearance-none w-full rounded-r-md shadow-md border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-pink-200 focus:border-pink-200"
          />
        </div>
      ) : null}
    </div>
  );
}
