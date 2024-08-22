import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main className="min-h-screen container">
        <Header/>
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800 mt-10">
        Credit goes to RSC 🙌 for the tutorial and valuable content.
      </footer>
    </>
  );
};

export default AppLayout;
