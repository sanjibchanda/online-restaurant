import React from "react";
import { LIST_IMG_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <li
            key={item.card.info.id}
            className="bg-gray-100 flex gap-4 items-center justify-between py-3 px-5 mb-3"
          >
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-medium text-md">{item.card.info.name}</h3>
              <p className="text-base font-semibold text-gray-500">
                ₹{item.card.info.price / 100}
              </p>
              <p className="text-xs text-gray-500">
                {item.card.info.description}
              </p>
            </div>
            <div className="relative">
              <img
                src={LIST_IMG_URL + item.card.info.imageId}
                alt="images"
                className="w-[120px] h-[120px] rounded-lg object-cover object-center"
              />
              <button
                className="btn btn-primary self-start text-sm absolute inset-x-0 -bottom-1 w-[70px] m-auto"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
