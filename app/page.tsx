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

        <pre>{JSON.stringify(env, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Page;
