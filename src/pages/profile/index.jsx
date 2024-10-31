import { Profiles } from "../../components";
import { useDispatch } from "react-redux";
const Profile = () => {
  const user = useDispatch((state) => state.user);
  return (
    <>
      <h1>Funcione</h1>
      <p>{user.fullName}</p>
    </>
  );
};
export { Profile };
