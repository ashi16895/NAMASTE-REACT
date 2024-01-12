import { useState } from "react";
import ItemList from "./ItemList";

export default RestaurantCategory = ({ data, showItems, setShowIndex, setHideIndex }) => {
    const handleClick = () => {
       if(showItems === true){
        setHideIndex();
       }else{
        setShowIndex();
       }
    }
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItems?"⬆️":"⬇️"}</span>
        </div>
        {/* Accordion Body */}
        {showItems  && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
