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
          style={{
            color: "#FFF",
            textAlign: "center",
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
