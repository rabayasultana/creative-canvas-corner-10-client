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
      path: "addCraftItem",
      element: <AddCraftItem></AddCraftItem>
    },
    {
      path: "updateCraftItem/:id",
      element: <UpdateCraftItem></UpdateCraftItem>,
      loader: ({params}) => fetch(`http://localhost:5000/craftItem/${params.id}`)

    },
    {
      path: "myArtCraft",
      element: <MyCraftList></MyCraftList>
    },
    {
      path: "allArtCraft",
      element: <AllCraftItem></AllCraftItem>,
      loader: () => fetch('http://localhost:5000/craftItem')
    }
  ]
},
  ]);
  

  export default router;