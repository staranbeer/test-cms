import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";
import Link from "next/link";
import Card from "../../../components/utils/Card";

const getAllCollections = async () => {
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
    path: "content",
  });

  return data;
};

async function getData() {
  let data = await getAllCollections();
  let parsedCollections = JSON.parse(JSON.stringify(data)).map((i: any) => {
    return { name: i.name, type: i.type, path: i.path };
  });

  return parsedCollections;
}

export default async function Page() {
  const data = await getData();
  console.log("THIS IS THE DATA: ", data);
  return (
    <>
      {data ? (
        <div>
          <h1>Collections</h1>
          <div className="flex gap-5 mt-5 flex-wrap">
            {data.map((i: any) => {
              return (
                <Link
                  key={i.name}
                  href={`/content/collections/${i.name.toLowerCase()}`}
                >
                  <Card>
                    <h2>{i.name}</h2>
                    <p>{i.path}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div>noting found</div>
      )}
    </>
  );
}
