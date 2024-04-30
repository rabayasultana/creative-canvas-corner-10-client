import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CraftItemDetails = () => {
  const craftItems = useLoaderData();
  const {
    userName, 
    email, 
    craftName,
    price,
    subCategory,
    description,
    processingTime,
    stockStatus,
    customization,
    rating,
    photo,
  } = craftItems;

  return (
    <div>
      <Navbar></Navbar>
      <div className="m-10">
        <div className=" bg-red-50 p-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <img
              src={photo}
              className="w-1/2 mx-auto md:w-1/3 md:h-1/3 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold mb-4">{craftName}</h1>
              <h1 className="text-3xl font-bold text-[#8F3034]">{subCategory}</h1>
              <p className="py-2">
                User Name: {userName}
              </p>
              <p className="py-2"> Email: 
                {email}
              </p>
              <p className="py-2"> Description: 
                {description}
              </p>
              <p className="py-2">
               Price:  {price}
              </p>
              <p className="py-2">
                Processing Time: {processingTime}
              </p>
              <p className="py-2">StockStatus: 
                {stockStatus}
              </p>
              <p className="py-2">
                Customization: 
                {customization}
              </p>
              <p className="py-2">Rating: 
                {rating}
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CraftItemDetails;
