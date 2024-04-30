import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../components/CraftItemCard";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Category from "../components/Category";

const Home = () => {
    
  const craftItems = useLoaderData();
    return (

        <div>
  
            <Navbar></Navbar>
            
            <Banner></Banner>
            <div className="m-20">
            <h1 className="text-6xl text-center text-[#8F3034]">Our Craft Items</h1>
            <div className="grid md:grid-cols-2 gap-4">
            {
                craftItems.map(craftItem => <CraftItemCard key={craftItem._id} craftItem ={craftItem}></CraftItemCard>)
            }
            </div>
            <Category></Category>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;