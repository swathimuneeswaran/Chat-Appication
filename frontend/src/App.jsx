import Login from "./pages/login/Login.jsx"
import "./App.css"
import SignUp from "./pages/signup/SignUp.jsx"
import Home from "./pages/home/Home.jsx"
import { Routes,Route} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext.jsx"
import { Navigate } from "react-router-dom";


function App() {
  
 const {authUser}=useAuthContext();
  return (
    <>
     <div className=" flex items-center justify-center">
     <Toaster />
      <Routes>
  
        <Route path="/" element={authUser? <Home /> :<Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> :<Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
