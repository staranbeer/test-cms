import Link from "next/link";
import Card from "../../../../components/utils/Card";

async function getData(collection: string) {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/collections/${collection}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Collection = async ({
  params,
}: {
  params: {
    collection: string;
  };
}) => {
  const data = await getData(params.collection);

  const folders = data.filter((i: any) => i.type === "dir");
  const files = data.filter((i: any) => i.type !== "dir");

  return (
    <div>
      <h1 className="text-2xl mb-8 font-bold">Blog Collection</h1>
      <div>
        {folders.length > 0 && (
          <h2 className="text-lg mb-4 bg-pink-500 inline text-white px-3 py-1 rounded-md font-bold">
            Folders
          </h2>
        )}

        <div className="flex flex-wrap gap-5 mt-5">
          {folders.map((i: any) => {
            return (
              <Link
                key={i.name}
                href={
                  i.type === "dir"
                    ? `/content/collections/${params.collection}/${i.name}`
                    : `editor/${i.name}`
                }
              >
                <Card className="relative ">
                  <h1 className="text-lg font-semibold">
                    {i.name.replaceAll(".mdx", "")}
                  </h1>
                  <div className="absolute top-2 right-2 ">
                    {i.type === "dir" ? (
                      <span className=" bg-pink-500 py-1 px-2 rounded-md text-white font-bold">
                        folder
                      </span>
                    ) : (
                      <span className=" bg-blue-500 py-1 px-2 rounded-md text-white font-bold">
                        file
                      </span>
                    )}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" mt-8">
        {files.length > 0 && (
          <h2 className="text-lg mb-4 bg-blue-500 inline text-white px-3 py-1 rounded-md font-bold">
            Files
          </h2>
        )}

        <div className="flex flex-wrap gap-5 mt-5">
          {files.map((i: any) => {
            return (
              <Link
                key={i.name}
                href={
                  i.type === "dir"
                    ? `/content/collections/pages/${i.name}`
                    : `editor/${i.name}`
                }
              >
                <Card className="relative ">
                  <h1 className="text-lg font-semibold">
                    {i.name.replaceAll(".mdx", "")}
                  </h1>
                  <div className="absolute top-2 right-2 ">
                    {i.type === "dir" ? (
                      <span className=" bg-pink-500 py-1 px-2 rounded-md text-white font-bold">
                        folder
                      </span>
                    ) : (
                      <span className=" bg-blue-500 py-1 px-2 rounded-md text-white font-bold">
                        file
                      </span>
                    )}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
