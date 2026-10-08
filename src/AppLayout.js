import Header from "./Components/landing-page/Header";
import Footer from "./Components/landing-page/Footer";
import { Outlet } from "react-router";


const Container = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Container