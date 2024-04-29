import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../components/CraftItemCard";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
    
  const craftItems = useLoaderData();
    return (

        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="m-20">
            <h1 className="text-6xl text-center  text-purple-600">length: {craftItems.length}</h1>
            <div className="grid md:grid-cols-2 gap-4">
            {
                craftItems.map(craftItem => <CraftItemCard key={craftItem._id} craftItem ={craftItem}></CraftItemCard>)
            }
            </div>
        </div>
        </div>
    );
};

export default Home;