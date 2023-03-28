import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="mx-auto max-w-md h-full flex flex-col">
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
