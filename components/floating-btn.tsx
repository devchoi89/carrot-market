import Link from "next/link";
import React from "react";

interface FloatingBtn {
  icon: React.ReactNode;
  href: string;
}

export default function FloatingBtn({ icon, href }: FloatingBtn) {
  return (
    <Link href={href}>
      <button className="border rounded-full p-3 bg-red-500 text-white fixed bottom-24 right-3">
        {icon}
      </button>
    </Link>
  );
}
