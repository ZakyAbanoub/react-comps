import Button from "../components/Button";
import { GoBell } from "react-icons/go";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("Works");
  };
  return (
    <>
      <div>
        <Button className="mb-5" primary outline onClick={handleClick}>
          <GoBell />
          Hello!
        </Button>
      </div>
      <div>
        <Button className="mt-5" secondary>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button>Sea Deal!</Button>
      </div>
      <div>
        <Button success rounded>
          Hide Ads!
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
