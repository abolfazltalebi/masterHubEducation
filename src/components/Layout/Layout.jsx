import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
