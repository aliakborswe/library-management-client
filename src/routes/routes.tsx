import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../home/Home";
import AllBooks from "../books/AllBooks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path='all-books' element={<AllBooks/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
