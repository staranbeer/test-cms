import Link from "next/link";

const Page = () => {
  return (
    <div className="p-10 h-screen overflow-hidden grid place-items-center">
      <div className="flex flex-col gap-4 text-center">
        <h1>Authentication yet to be implemented</h1>
        <Link
          className="underline underline-offset-4 text-purple-700"
          href="/content/collections"
        >
          Continue to your saved collections
        </Link>
      </div>
    </div>
  );
};

export default Page;
