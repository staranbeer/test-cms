import Link from "next/link";
import { env } from "process";

const Page = () => {
  return (
    <div>
      <div>
        <h1>Authentication yet to be implemented</h1>
        <Link href="/content/collections">
          Continue to your saved collections
        </Link>
      </div>
    </div>
  );
};

export default Page;
