import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { Auth, Dashboard, LandingPage, Link, RedirectLink } from "./pages";
import UrlProvider from "./context";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/link/:id",
          element: <Link />,
        },
        {
          path: "/:id",
          element: <RedirectLink />,
        },
      ],
    },
  ]);
  return (
    <UrlProvider>
      <RouterProvider router={router}></RouterProvider>;
    </UrlProvider>
  );
}

export default App;
