import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
