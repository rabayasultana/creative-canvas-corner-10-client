import Swal from 'sweetalert2'
import Navbar from '../components/Navbar';

const AddCraftItem = () => {
    const handleAddCraftItem = event => {
        event.preventDefault();
        const form = event.target;

        const userName = form.name.value;
        const userEmail = form.email.value;
        const craftName = form.craftName.value;
        const price = form.price.value;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newCraftItem = {userName, userEmail, craftName,  price, subCategory, description, processingTime , stockStatus, customization, rating, photo}
        console.log(newCraftItem);

        // send data to the server
        fetch('http://localhost:5000/craftItem',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraftItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Craft Item Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })


    }
  return (
<div>
  <Navbar></Navbar>
<div className="bg-[#F4F3F0]">
      <h2 className="text-3xl font-extrabold mb-8">Add craftitem</h2>

      <form onSubmit={handleAddCraftItem} className="space-y-2">
        {/* Form email and name row */}
        <div className="md:flex md:gap-4">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>
        {/* Form item and price row */}
        <div className="md:flex md:gap-4">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Craft Item Name</span>
            </div>
            <input
              type="text"
              name="craftName"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>

        {/* Sub category and description*/}
        <div className="md:flex md:gap-4">
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
        {/* Processing time and stock status row */}
        <div className="md:flex md:gap-4">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Processing Time</span>
            </div>
            <input
              type="text"
              name="processingTime"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Stock Status</span>
            </div>
            <input
              type="text"
              name="stockStatus"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>

                {/* Customization and rating row */}
                <div className="md:flex md:gap-4">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Customization</span>
            </div>
            <input
              type="text"
              name="customization"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="text"
              name="rating"
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
        <input type="submit" value="Add Craft Item"  className="btn btn-primary w-full" />
      </form>
    </div>
</div>
  );
};

export default AddCraftItem;
