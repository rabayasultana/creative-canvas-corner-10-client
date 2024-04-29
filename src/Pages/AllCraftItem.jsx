import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import CraftItemCard from "../components/CraftItemCard";


const AllCraftItem = () => {
    const craftItems = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 gap-4">
            {
                craftItems.map(craftItem => <CraftItemCard key={craftItem._id} craftItem ={craftItem}></CraftItemCard>)
            }
            </div>
        </div>
    );
};

export default AllCraftItem;