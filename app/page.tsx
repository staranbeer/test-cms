import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
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
