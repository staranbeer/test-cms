"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="site-container">
        Go to{" "}
        <button
          className="button-primary"
          onClick={() => router.push("editor")}
        >
          Editor
        </button>
      </div>
    </div>
  );
};

export default Page;
