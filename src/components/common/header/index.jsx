import { useMatches } from "react-router-dom";
import { useSelector } from "react-redux";
import { Profiles, Search } from "../index.js";
import { Buttons } from "../../buttons";
const Header = () => {
  const user = useSelector((state) => state.user);
  const matches = useMatches().at();
  const { pathname } = matches;
  if (user.fullName === null & pathname === "/") {
    return (
      <>
        <div className=" w-full  pt-6 mt-0 ">
          <div className="border border-orange-600 flex justify w-80" >
            <Search className="flex justify-center" />
          </div>
          <Buttons />
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
