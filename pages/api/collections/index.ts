import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = await getAllCollections();
  let parsedCollections = JSON.parse(JSON.stringify(data)).map((i: any) => {
    return { name: i.name, type: i.type, path: i.path };
  });

  res.status(200).json(parsedCollections);
}
