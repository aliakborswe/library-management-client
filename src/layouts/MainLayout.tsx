import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='min-h-screen mt-[77px]'>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;
