import EditorUI from "../../../../components/EditorUi";

const Page = ({
  params,
}: {
  params: {
    file: string[];
  };
}) => {
  const file = params.file.join("/");

  return (
    <div className="flex divide-x-2 h-screen overflow-hidden">
      {/* <EditorUI /> */}
      this is the editor
    </div>
  );
};

export default Page;
