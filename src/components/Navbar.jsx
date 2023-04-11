import { useContext } from "react";
import { AppContext } from "../context";
import { MdLogout, MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser, setDocInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem("user");
    setDocInfo(null);
    setUser(null);
  };
  const reloadPage = () => {
    navigate("/");
    setDocInfo(null);
  };
  return (
    <div className="bg-theme_green-600 py-2 text-white shadow-lg sticky top-0 z-20">
      <div className="px-4 flex items-center justify-start gap-3">
        <MdHome className="text-2xl" onClick={reloadPage} />
        <div className="font-semibold">Hi, {user?.emp_name}</div>
        <div className="flex items-center gap-2 ml-auto" onClick={logoutHandle}>
          <MdLogout className="text-xl" />
          Logout
        </div>
      </div>
    </div>
  );
};
export default Navbar;
