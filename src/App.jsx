import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Nav/>
        <Routes>
          <Route path="/movie-react" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
