import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div data-theme="light">
      <ScrollToTop></ScrollToTop>
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
