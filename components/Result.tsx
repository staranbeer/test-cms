import Markdown from "markdown-to-jsx";
const DatePicker = () => {
  return <div className="bg-red-400 p-3">This is a datepicker</div>;
};

const Result = ({ code }: { code: string }) => {
  return (
    <Markdown
      options={{
        overrides: {
          DatePicker: {
            component: DatePicker,
          },
        },
      }}
    >
      {code}
    </Markdown>
  );
};

export default Result;
