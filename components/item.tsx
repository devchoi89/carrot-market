import { Product } from "@prisma/client";
import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  hearts: number;
}

export default function Item({ title, price, hearts, id }: ItemProps) {
  return (
    <Link href={`/products/${id}`}>
      <a className="flex justify-between py-5 cursor-pointer">
        <div className="flex items-center">
          <div className="w-20 h-20 mx-3 bg-gray-400 rounded-md" />
          <div className="flex flex-col">
            <h3 className="">{title}</h3>
            <span className="font-semibold">${price}</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex space-x-1 items-center pr-3">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{hearts}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
