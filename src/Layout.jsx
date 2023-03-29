import { useContext } from "react";
import { Outlet, useMatch } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { AppContext } from "./context";

const Layout = () => {
  const { isLoading } = useContext(AppContext);
  const isLogin = useMatch("/login");
  return (
    <div className="mx-auto max-w-md h-full flex flex-col">
      {isLoading && <Loader />}
      {!isLogin && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
