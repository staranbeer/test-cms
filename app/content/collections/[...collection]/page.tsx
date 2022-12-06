async function getData(collection: string) {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/collections/${collection}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
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
  return <div>{data.map((i: any) => i.name)}</div>;
};

export default Page;
