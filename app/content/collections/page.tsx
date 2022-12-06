import Link from "next/link";
import Card from "../../../components/utils/Card";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_ENV}/api/collections`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
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
  );
}
