import "./App.css";
import Category from "./Category";
import Productitems from "./Productitems";

function App() {
  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category></Category>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Productitems></Productitems>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
