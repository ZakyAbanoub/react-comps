import Accordion from "./components/Accordion";

const items = [
  {
    id: 1,
    label: "Can I use Angular ?",
    content:
      "Yes you can use Angular, but you have know TypeScript before using it.",
  },
  {
    id: 2,
    label: "Can I use React on a project?",
    content: "You can use React on any project you want!",
  },
  {
    id: 3,
    label: "What about Vue?",
    content: "Vue is a JavaScript Framework that it easy to learn and use",
  },
];

const App = () => {
  return (
    <>
      <Accordion items={items} />
    </>
  );
};

export default App;
