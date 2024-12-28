import "./CategoryFilter.css";
import categories from "src/db/categories";

const CategoryFilter = ({categoryHandler}) => {
  const handleClick = (categoryName) => {   
    categoryHandler(categoryName); 
  };
  
  return (
    <div className="secondary-navbar">
      <div className="app">
        <ul className="category-list_container poppins-medium">
          <li onClick={() => handleClick("All")}>All</li>
          {categories.map((items) => (
            <li key={items._id} onClick={() => handleClick(items.categoryName)}>
              {items.categoryName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
