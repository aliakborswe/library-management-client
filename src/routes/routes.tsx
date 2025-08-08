import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../books/AllBooks";
import SingleBook from "@/pages/SingleBook";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='all-books' element={<AllBooks />} />
        <Route path='books/:id' element={<SingleBook />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
