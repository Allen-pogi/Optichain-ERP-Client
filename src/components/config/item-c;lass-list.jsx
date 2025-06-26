import React from "react";

const ItemClassList = ({ items, onSelect, onAddNew, onSave, selectedItem }) => {
  return (
    <div className="w-1/4 bg-white rounded-lg shadow p-4 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b mb-2">
        <h2 className="text-sm font-semibold text-gray-700">Item Class Tree</h2>
        <button className="p-1 text-gray-500 hover:text-gray-700">
          <span className="material-icons text-xl">settings</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center space-x-1 mb-2 text-gray-600">
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="material-icons text-lg" onClick={onSave}>
            save
          </span>
        </button>

        <button className="p-1 hover:bg-gray-200 rounded" onClick={onAddNew}>
          <span className="material-icons text-lg">add</span>
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="material-icons text-lg">delete</span>
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="material-icons text-lg">description</span>
        </button>
        <span className="text-gray-300">|</span>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="material-icons text-lg">keyboard_arrow_left</span>
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="material-icons text-lg">keyboard_arrow_right</span>
        </button>
        <span className="text-gray-300">|</span>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="material-icons text-lg">expand_less</span>
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="material-icons text-lg">expand_more</span>
        </button>
      </div>

      {/* Scrollable Item List */}
      <div className="text-sm max-h-[calc(100vh-150px)] overflow-y-auto pr-2 space-y-1">
        {items.map((item, i) => {
          const isSelected = selectedItem?.classID === item.classID;

          return (
            <div
              key={i}
              className={`flex items-center cursor-pointer p-1 rounded ${
                isSelected
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onSelect(item)}
            >
              <span className="material-icons text-base mr-1 text-gray-500">
                arrow_right
              </span>
              <span>
                {item.classID} - {item.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemClassList;
