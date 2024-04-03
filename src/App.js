import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
   <>
   <Router>
      <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Profile" element={<Profile/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
    <Route path="/Offers" element={<Offers/>}></Route>
    <Route path="/Sign-In" element={<SignIn/>}></Route>
    <Route path="Sign-Up" element={<SignUp/>}></Route>
    </Routes>

   </Router>

   <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
   </>
  );
}

export default App;
