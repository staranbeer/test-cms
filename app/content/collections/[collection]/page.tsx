import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";
import Link from "next/link";
import Card from "../../../../components/utils/Card";

const getCollection = async (collection: string | string[] | undefined) => {
  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.APP_ID,
      privateKey: process.env.PRIVATE_KEY,
      installationId: process.env.INSTALLATION_ID,
    },
  });

  const { data } = await octokit.rest.repos.getContent({
    owner: "OutpostLabs",
    repo: "Outpost.run",
    path: `content/${collection}`,
  });

  return data;
};

async function getData(collection: string) {
  let requestedCollection = collection;
  let data = await getCollection(requestedCollection);

  let parsedCollections = JSON.parse(JSON.stringify(data)).map((i: any) => {
    return { name: i.name, type: i.type, path: i.path };
  });
  return parsedCollections;
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
    <>
      {data ? (
        <div className="p-10">
          <div className="flex  mb-8 justify-between items-center">
            <h1 className="text-2xl font-bold">
              {params.collection} Collection{" "}
            </h1>
            <Link
              href="/content/editor"
              className="inline-block cursor-pointer ml-8 bg-black px-6 py-2 text-white font-bold"
            >
              {" "}
              Create New
            </Link>
          </div>
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
                    href={`/content/collections/${params.collection}/${i.name}`}
                  >
                    <Card className="relative">
                      <h1 className="">{i.name.replaceAll(".mdx", "")}</h1>
                      <div className="absolute top-2 right-2 ">
                        {i.type === "dir" ? (
                          <span className="tag bg-pink-500">folder</span>
                        ) : (
                          <span className=" bg-blue-500 tag">file</span>
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
                    href={`/content/editor/collections/${params.collection}/${i.name}`}
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
      ) : (
        <div>nothing found</div>
      )}
    </>
  );
};

export default Collection;
