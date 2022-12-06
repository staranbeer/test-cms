import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";
import Link from "next/link";
import Card from "../../../../components/utils/Card";

const getPage = async (collection: string | string[] | undefined) => {
  let requestedCollection;

  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.APP_ID,
      privateKey: process.env.PRIVATE_KEY,
      installationId: process.env.INSTALLATION_ID,
    },
  });

  if (collection) {
    if (typeof collection === "string") {
      requestedCollection = collection;
    } else {
      requestedCollection = collection.join("/");
    }
  }
  console.log("THis is what we want", requestedCollection, collection);
  const { data } = await octokit.rest.repos.getContent({
    owner: "OutpostLabs",
    repo: "Outpost.run",
    path: `content/${requestedCollection}`,
  });
  return data;
};

async function getData(collection: string) {
  let requestedCollection = collection;
  console.log("this was requested", requestedCollection);
  let data = await getPage(requestedCollection);

  let parsedCollections = JSON.parse(JSON.stringify(data)).map((i: any) => {
    return { name: i.name, type: i.type, path: i.path };
  });
  return parsedCollections;
}

const Page = async ({
  params,
}: {
  params: {
    collection: string[];
  };
}) => {
  const route = params.collection.join("/");
  const data = await getData(route);
  return (
    <div className="p-10">
      <h2 className="text-2xl capitalize font-bold mb-8">
        {params.collection[params.collection.length - 1]}
      </h2>
      {data ? (
        <div className="flex  flex-wrap gap-5">
          {data.map((i: any) => (
            <Link
              href={`/content/editor/collections/${params.collection.join(
                "/"
              )}`}
              key={i.name}
            >
              <Card>
                <h2>{i.name.replaceAll(".mdx", "")}</h2>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div>nothing found</div>
      )}
    </div>
  );
};

export default Page;
