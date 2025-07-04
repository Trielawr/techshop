import React from 'react';
import Header from '../../Components/Section/Header/Header';
import Footer from '../../Components/Section/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <header>
       <Header/>
    </header>
    <main>
       <Outlet/>
    </main>
    <footer>
       <Footer/>
    </footer>
    </>
  )
}

export default Layout;