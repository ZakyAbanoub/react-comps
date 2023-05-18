import { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: 0 },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <Dropdown options={options} value={selection} onChange={handleSelection} />
  );
};

export default App;
