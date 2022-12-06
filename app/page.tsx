import Link from "next/link";

const Page = () => {
  return (
    <html>
      <head>this is the head</head>
      <body>
        <div className="h-screen overflow-hidden grid place-items-center">
          <div className="flex flex-col gap-4 text-center">
            <h1>Authentication yet to be implemented</h1>
            <Link href="/content/collections">
              Continue to your saved collections
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Page;
