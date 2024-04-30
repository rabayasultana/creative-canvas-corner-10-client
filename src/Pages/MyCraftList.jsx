import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../components/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const MyCraftList = () => {
  const { user } = useContext(AuthContext) || {};
  const [craftItems, setCraftItems] = useState([]);
  const [control, setControl] = useState([false]);

  useEffect(() => {
    fetch(`http://localhost:5000/craftItem`)
      .then((res) => res.json())
      .then((data) => {
        if (user) {
          const filteredData = data.filter((item) => item.email === user.email);
          console.log(filteredData);
          setCraftItems(filteredData);
        } else {
          setCraftItems(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user, control]);

  // Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Craft Item has been deleted.",
                "success"
              );
              setControl(!control);
            }
          });
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="m-16">
        <div className="grid md:grid-cols-2 gap-4">
          {craftItems?.map((craftItem) => (
            <div key={craftItem._id}>
              <div className="card bg-red-50 shadow-xl">
                <figure>
                  <img className="md:h-[300px] md:w-[300px]" src={craftItem.photo} alt="Item" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                  {craftItem.craftName}
                    <div className="badge badge-secondary">{craftItem.stockStatus}</div>
                  </h2>
                  <p>Customization: {craftItem.customization}</p>
                  <div className="card-actions">
                    <div className="badge badge-outline">Price: {craftItem.price}</div>
                    <div className="badge badge-outline">Rating: {craftItem.rating}</div>
                  </div>
                  <div className="card-actions justify-around">
                    <Link to={`/updateCraftItem/${craftItem._id}`}>
                      <button className="btn bg-[#8F3034] text-white">
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(craftItem._id)}
                      className="btn bg-[#8F3034] text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCraftList;
