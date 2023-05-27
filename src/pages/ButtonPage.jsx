import Button from "../components/Button";
import { GoBell } from "react-icons/go";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("Works");
  };
  return (
    <>
      <div>
        <Button primary outline onClick={handleClick}>
          <GoBell />
          Hello!
        </Button>
      </div>
      <div>
        <Button secondary>Buy Now!</Button>
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
