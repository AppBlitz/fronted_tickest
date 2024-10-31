import { useMatches } from "react-router-dom";
import { useSelector } from "react-redux";
import { Profiles } from "../index.js";
import { Buttons } from "../../buttons";
const Header = () => {
  const user = useSelector((state) => state.user);
  const matches = useMatches().at();
  const { pathname } = matches;
  if (user.fullName === null && pathname === "/") {
    return (
      <>
        <div className=" w-full bg-black pt-6 mt-0 ">
          <div></div>
          <div className="flex justify-end">
            <Buttons />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full">
          <div></div>
          <div className="flex justify-end">
            <Profiles />
          </div>
        </div>
      </>
    );
  }
};
export { Header };
