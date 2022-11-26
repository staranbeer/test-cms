import Link from "next/link";
import Card from "../../components/utils/Card";
const CardsData = [
  {
    name: "Documentation",
    desc: "Edit the official documentation for the control plane",
  },
  { name: "Blog", desc: "Edit the Blog posts on the official website" },
  {
    name: "Pages",
    desc: "Edit the page content on the official Outpost website",
  },
];
const Page = () => {
  return (
    <div className="p-10">
      <h1 className="text-lg font-bold">Collections</h1>
      <div className="flex  mt-5 gap-[3%] justify-between">
        {CardsData.map((i) => {
          return (
            <Link
              className="cursor-pointer"
              key={i.name}
              href={`/collections/${i.name.toLowerCase()}`}
            >
              <Card className="basis-[30%]">
                <h2>{i.name}</h2>
                <p className="text-gray-600 mt-4 ">{i.desc}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
