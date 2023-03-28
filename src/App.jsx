import { Route, Routes } from "react-router-dom";
import ProtectectRoute from "./ProtectectRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import SelectTemplate from "./pages/SelectTemplate";
import DocInfo from "./pages/DocInfo";
import DownloadPoster from "./pages/DownloadPoster";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route element={<ProtectectRoute />}>
            <Route index element={<Home />} />
            <Route path="select-template" element={<SelectTemplate />} />
            <Route path="doctor-information" element={<DocInfo />} />
            <Route path="download-poster" element={<DownloadPoster />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
