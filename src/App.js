import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
   <>
   <Router>

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Profile" element={<Profile/>}></Route>
    <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
    <Route path="/Offers" element={<Offers/>}></Route>
    <Route path="/SignIn" element={<SignIn/>}></Route>
    <Route path="SignUp" element={<SignUp/>}></Route>
    </Routes>

   </Router>
   </>
  );
}

export default App;
