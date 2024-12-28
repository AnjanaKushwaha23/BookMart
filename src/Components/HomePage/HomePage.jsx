import { useState } from "react";
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import ProductList from '../ProductList/ProductList'
import HeroBanner from "../HeroBanner/HeroBanner";

const HomePage = () => {
  const [categoryData, setCategoryData] = useState('');
  const categoryHandler =(category)=>{    
    setCategoryData(category);
    // console.log(categoryData);
  }
  return (
    <div>
     <CategoryFilter categoryHandler={categoryHandler}/>
     <HeroBanner/>
     <ProductList category={categoryData}/>
    </div>
  )
}

export default HomePage
