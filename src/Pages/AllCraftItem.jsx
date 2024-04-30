import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AllCraftItem = () => {
    const craftItems = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
         <div className="w-3/4 mt-10 mb-16 mx-auto bg-red-50">
         <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Craft Name</th>
        <th>Subcategory Name</th>
        <th>Price</th>
        <th>StockStatus</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                craftItems.map(craftItem => <>
                      <tr key={craftItem._id}>
        <th></th>
        <td>{craftItem.craftName}</td>
        <td>{craftItem.subCategory}</td>
        <td>{craftItem.price}</td>
        <td>{craftItem.stockStatus}</td>
        <td><Link to={`/craftItemDetails/${craftItem._id}`}><button className="btn btn-ghost btn-xs">details</button></Link></td>
      </tr>
     
                </>)
            }
    </tbody>
  </table>
</div>
         </div>
<Footer></Footer>
        </div>
    );
};

export default AllCraftItem;