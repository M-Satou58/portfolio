import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Main from "./Components/Main"
import Games from "./Components/Games/Games"
import Tenzi from "./Components/Games/Tenzi/Tenzi"
import NotFound from "./Components/NotFound"
function App() {
  return (                                            
      <div className="font-bit">
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<Main />} />
            
                <Route path="/games" element={<Games />}   />
                <Route path="/games/tenzi" element={<Tenzi />} />

                <Route path="*" element={<NotFound />}   />
            </Routes>
        <Outlet />
      </div>
 );
}

export default App;
