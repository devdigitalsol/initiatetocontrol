import { useContext } from "react";
import { AppContext } from "../context";
import LOGOUT from "./../assets/logout.png";

const Navbar = () => {
  const { user, setUser, setDocInfo } = useContext(AppContext);
  const logoutHandle = () => {
    localStorage.removeItem("user");
    setDocInfo(null);
    setUser(null);
  };
  return (
    <div className="bg-theme_green-600 py-2 text-white shadow-lg sticky top-0 z-20">
      <div className="px-4 flex items-center justify-between">
        <div className="font-semibold">Hi, {user?.emp_name}</div>
        <div onClick={logoutHandle} className="w-5">
          <img src={LOGOUT} alt="logout" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
