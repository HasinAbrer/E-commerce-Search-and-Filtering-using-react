import { useEffect, useState } from "react";
import "./App.css";
import Category from "./Category";
import Productitems from "./Productitems";
import axios from "axios";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalPro, setFinalPro] = useState([]);

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalPro(finalRes.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px] items-start">
            <div>
              <Category finalCategory={finalCategory}></Category>
            </div>

            <div className="grid grid-cols-3 gap-4 items-start mt-13.5">
              {finalPro.map((product) => {
                return <Productitems key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
