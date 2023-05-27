import Link from "./Link";

const LINKS = [
  { label: "Dropdown", path: "/" },
  { label: "Accordion", path: "/accordion" },
  { label: "Buttons", path: "/button" },
];

const Sidebar = () => {
  const rendredLinks = LINKS.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      className="mb-3"
      activeClassName="font-bold border-l-4 border-blue-500 pl-2"
    >
      {link.label}
    </Link>
  ));
  return (
    <div className="sticky top-0 flex flex-col items-start">{rendredLinks}</div>
  );
};

export default Sidebar;
