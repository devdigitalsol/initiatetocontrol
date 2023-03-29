import { Outlet, useMatch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  const isLogin = useMatch("/login");
  return (
    <div className="mx-auto max-w-md h-full flex flex-col">
      {!isLogin && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
