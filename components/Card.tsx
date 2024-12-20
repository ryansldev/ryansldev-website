'use client';

import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
  download?: boolean;
}

export function Card({
  title,
  description,
  href,
  download = false,
}: CardProps) {
  return (
    <Link target="_blank" href={href} className="flex flex-1 flex-col gap-3 justify-center w-72 min-h-40 px-7 py-4 bg-main-900 rounded-lg border border-main-800 hover:border-main-700 transition min-w-[250px]" download={download}>
      <h3 className="text-2xl font-extrabold tracking-[-0.04px]">{title}</h3>
      <span className="text-main-500 font-medium">{description}</span>
    </Link>
  )
}
