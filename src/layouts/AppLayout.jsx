import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return <>
  
  <main>
    <header></header>
    <Outlet/>
  </main>
  <footer></footer>
  </>;
};

export default AppLayout;