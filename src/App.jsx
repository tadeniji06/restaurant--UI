import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Reservation from "./Pages/Reservation"

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/reservation" element={<Reservation/>} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
