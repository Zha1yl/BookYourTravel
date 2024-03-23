import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AuthContext from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthContext>
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthContext>
    </div>
  );
};

export default App;
