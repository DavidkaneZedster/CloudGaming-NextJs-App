import { useState } from "react";
import { Footer } from ".";
import { Header } from ".";

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
