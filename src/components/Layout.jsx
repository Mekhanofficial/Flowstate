import { Outlet } from "react-router-dom";
import HeaderPage from "./Header";
// import FooterPage from "./Footer";

const Layout = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
      {/* <FooterPage /> */}
    </>
  );
};

export default Layout;
