"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="mx-auto mt-32 max-w-max">
      <h1 className="text-xl font-bold">
        Authentication yet to be implemented
      </h1>
      <Link
        className="underline underline-offset-4 text-purple-800 text-center mt-6 block max-w-content"
        href="/content/collections"
      >
        Continue to your saved collections
      </Link>
    </div>
  );
};

export default Page;
