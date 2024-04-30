import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";


const CategoryForm = () => {
    const { user } = useContext(AuthContext) || {};
  const handleAddCategory = (event) => {
    event.preventDefault();
    console.log(user.displayName);

    const form = event.target;

    const subCategory = form.subCategory.value;
    const description = form.description.value;

    const photo = form.photo.value;

    const newCategory = {
    
      subCategory,
      description,

      photo,
    };
    console.log(newCategory);

    // send data to the server
    fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
    return (
        <div>
      <Navbar></Navbar>
      <h2 className="text-5xl text-center font-bold mb-8">Add Category</h2>
      <div className="bg-red-50 p-16 mb-10 w-3/4 mx-auto">
     

        <form onSubmit={handleAddCategory} className="space-y-2">
         

          {/* Sub category and description*/}
          <div className="">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Sub-Category</span>
              </div>
              <input
                type="text"
                name="subCategory"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>

            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <input
                type="text"
                name="description"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>


          {/* Photo row */}
          <div className="">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>
         <div className="w-1/2 mx-auto">
         <input
            type="submit"
            value="Add Craft Item"
            className="btn w-full bg-[#8F3034] text-white"
          />
         </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default CategoryForm;