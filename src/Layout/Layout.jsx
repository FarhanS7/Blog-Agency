import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
