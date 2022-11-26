import Link from "next/link";
import Card from "../../../../components/utils/Card";

const Collection = async () => {
  const blogs = [
    { name: "This is blog one", desc: "This is blog one's description" },
    { name: "This is blog two", desc: "This is blog two's description" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Collection</h1>
      <div className="flex gap-5 mt-5">
        {blogs.map((i) => {
          return (
            <Link key={i.name} href="/content/editor">
              <Card>
                <h1 className="text-lg font-semibold">{i.name}</h1>
                <p className="text-gray-600 mt-4">{i.desc}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
