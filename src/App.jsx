import "./app.scss";
// import Home from "./pages/home/Home";
// import Register from "./pages/register/Register";
// import Watch from "./pages/watch/Watch";
// import Login from "./pages/login/Login";
import ImageProcess from "./components/ImageProcess"
import {
  BrowserRouter ,
  Route,
  redirect,
  Routes,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  
  console.log("heheheeh")
  return (
    <div>
      <ImageProcess/>
    </div>
   
  );
};

export default App;
