import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../components/AuthProvider";
import CraftItemCard from "../components/CraftItemCard";
import { Link } from "react-router-dom";

const MyCraftList = () => {
    const { user } = useContext(AuthContext) || {};
    const [craftItems, setCraftItems] = useState([]); 
    // console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/craftItem`) // Fetch all data (modify if using backend filtering)
          .then((res) => res.json())
          .then((data) => {
            if (user) {
              const filteredData = data.filter(item => item.email === user.email);
              console.log(filteredData);
              setCraftItems(filteredData); // Update state with filtered items
            } else {
              setCraftItems(data); // Set all data if user not available yet (optional)
            }
          })
          .catch(error => {
            console.error(error);
          });
      }, [user]);
      


  return (
    <div>
        <Navbar></Navbar>
      <div>
      <div  className="grid md:grid-cols-2 gap-4">
      
      {
       craftItems?.map(craftItem => (
          <div key={craftItem._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={craftItem.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
    <div className="card-actions justify-between">
        <Link to={`/updateCraftItem/${craftItem._id}`}><button className="btn bg-[#8F3034] text-white">Update</button></Link>
    
      <button className="btn bg-[#8F3034] text-white">Delete</button>
    </div>
  </div>
</div>
          </div>
        ))

    // craftItems.map(craftItem => <CraftItemCard key={craftItem._id} craftItem ={craftItem}></CraftItemCard>)
      }
    </div>
      </div>
    </div>
  );
};

export default MyCraftList;
