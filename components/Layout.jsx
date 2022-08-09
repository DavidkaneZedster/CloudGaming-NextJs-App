import { useState } from "react";
import { Footer } from ".";
import { Header } from ".";

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? (
        children
      ) : (
        <h1
          className="system__notifications"
          style={{
            height: "420px",
            marginTop: "20%",
          }}
        >
          u are not authorized...
        </h1>
      )}
      <Footer />
    </>
  );
};

export default Layout;
