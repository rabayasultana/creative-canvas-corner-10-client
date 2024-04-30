import { Link } from "react-router-dom";


const CraftItemCard = ({ craftItem }) => {

    const {_id, userName, userEmail, craftName,  price, subCategory, description, processingTime , stockStatus, customization, rating, photo} = craftItem;

  return (

      <div className="card bg-red-50 shadow-xl mt-16">
        <figure>
          <img className="md:h-[300px] md:w-[300px]"
            src={photo} 
            alt="paint"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{craftName} 
            <div className="badge badge-secondary">{subCategory}</div>
          </h2>
          <p>{description}</p>
          <p>Price: {price} tk</p>
          <div className="grid md:grid-cols-3 items-center ">
            <div className="badge badge-outline">{stockStatus}</div>
            <div className="badge badge-outline">Rating:{rating}</div>
            <div className="card-actions justify-end">
          <Link to={`craftItemDetails/${_id}`}>
            <button className="btn bg-[#8F3034] text-white">
              View Details
            </button>
          </Link>
        </div>

          </div>
        </div>
      </div>
  );
};

export default CraftItemCard;
