
"use client";

import { useEffect, useState } from 'react';
import MainHead from '../components/MainHead';
import Loader from '../components/Loader';
import Switcher from '../components/Switcher';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import RightSidebar from '../components/RightSidebar';
import CommonJS from '../components/CommonJS';
import '../../styles/globals.css';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after hydration
    setLoading(false);
  }, []);

  return (
    <>
      <MainHead />
      {loading && <Loader />}
      <Switcher />
      <div className="page">
        <Header />
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <div className="main-content app-content">
              <div className="main-container container-fluid">
                {children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <RightSidebar />
      </div>
      <CommonJS />
    </>
  );
};

export default MainLayout;
