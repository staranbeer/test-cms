import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";

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
  console.log(data);
  return (
    <>
      {data ? (
        <div>{data.map((i: any) => i.name)}</div>
      ) : (
        <div>nothing found</div>
      )}
    </>
  );
};

export default Page;
