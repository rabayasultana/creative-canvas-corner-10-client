import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

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
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={photo}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{craftName}</h1>
              <h1 className="text-5xl font-bold">{subCategory}</h1>
              <p className="py-6">
                {userName}
              </p>
              <p className="py-6">
                {email}
              </p>
              <p className="py-6">
                {description}
              </p>
              <p className="py-6">
                {price}
              </p>
              <p className="py-6">
                {processingTime}
              </p>
              <p className="py-6">
                {stockStatus}
              </p>
              <p className="py-6">
                {customization}
              </p>
              <p className="py-6">
                {rating}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItemDetails;
