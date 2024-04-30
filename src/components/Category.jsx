import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Category = () => {
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
      // Fetch subcategories from your backend API
      fetch('http://localhost:5000/category') // Replace with your API endpoint
        .then(res => res.json())
        .then(data => setSubcategories(data))
        .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <li className="font-bold">
        <NavLink to="/categoryForm">Update Category</NavLink>
        <div className="art-craft-categories">
      <h2>Art & Craft Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {subcategories.map(subcategory => (
          <div key={subcategory._id} className="category-card">
            <img src={subcategory.image} alt={subcategory.name} />
            <h3>{subcategory.name}</h3>
            {/* Add other info you want to display here (optional) */}
          </div>
        ))}
      </div>
    </div>
      </li>
        </div>
    );
};

export default Category;