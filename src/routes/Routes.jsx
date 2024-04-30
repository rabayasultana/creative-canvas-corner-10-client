import {
    createBrowserRouter
  } from "react-router-dom";
  import UpdateCraftItem from '../Pages/UpdateCraftItem.jsx';
import NotFound from "../Pages/NotFound.jsx";
import AddCraftItem from "../Pages/AddCraftItem.jsx";
import Root from "../layouts/Root.jsx";
import Home from "../Pages/Home.jsx";
import MyCraftList from "../Pages/MyCraftList.jsx";
import AllCraftItem from "../Pages/AllCraftItem.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";
import CraftItemDetails from "../Pages/CraftItemDetails.jsx";
import Contact from "../Pages/Contact.jsx";
import CategoryForm from "../Pages/CategoryForm.jsx";
  
  const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/craftItem')
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
    {
      path: "/addCraftItem",
      element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
    },
    {
      path: "/updateCraftItem/:id",
      element: <PrivateRoute><UpdateCraftItem></UpdateCraftItem></PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/craftItem/${params.id}`)

    },
    {
      path: "/myArtCraft",
      element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>
    },
    {
      path: "/allArtCraft",
      element: <AllCraftItem></AllCraftItem>,
      loader: () => fetch('http://localhost:5000/craftItem')
    },
    {
        path: "craftItemDetails/:id",
        element: <PrivateRoute><CraftItemDetails></CraftItemDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/craftItem/${params.id}`)
        
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    },
    {
        path: "/categoryForm",
        element: <CategoryForm></CategoryForm>
      }
  ]
},
  ]);
  

  export default router;