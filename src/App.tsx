import './styles/main.scss';
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./pages/Home"



function App() {

  const router = createBrowserRouter([
    {
      path:'*',
      element: < Home/>,
    },
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "about",
    //   element: <About />,
    // },
    // {
    //   path: "contact",
    //   element: <Contact />,
    // },
    // {
    //   path: "services",
    //   element: <Services />,
      // children: [
      //   {
      //     path: "services/:id",
      //     element: <Test />,
      //   },
      // ],
    // },
    // {
    //    path: "services/:id",
    //   element: <ServiceSingle />,
    // },
  ]);





  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;