import Navbar from '@/home/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
      <>
      <header>
        <Navbar/>
      </header>
        <main className='min-h-screen'>
          <Outlet />
        </main>
      </>
    );
};

export default MainLayout;