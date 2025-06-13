import React from "react";

const inventoryData = [
  { id: 1, name: "Laptop", category: "Electronics", stock: 25, price: "$1200" },
  { id: 2, name: "Office Chair", category: "Furniture", stock: 40, price: "$150" },
  { id: 3, name: "Printer", category: "Electronics", stock: 10, price: "$300" },
  { id: 4, name: "Desk Lamp", category: "Accessories", stock: 60, price: "$25" },
  { id: 5, name: "Notebook", category: "Stationery", stock: 200, price: "$3" },
];

const Inventory = () => {
  return (
    <div className="p-6">
      <h1 className="text-[#0d141c] text-[32px] font-bold leading-tight mb-6">
        Inventory
      </h1>
      <div className="flex overflow-hidden rounded-lg border border-[#cedbe8] bg-slate-50">
        <table className="min-w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-4 py-3 text-left text-[#0d141c] text-sm font-medium leading-normal">ID</th>
              <th className="px-4 py-3 text-left text-[#0d141c] text-sm font-medium leading-normal">Name</th>
              <th className="px-4 py-3 text-left text-[#0d141c] text-sm font-medium leading-normal">Category</th>
              <th className="px-4 py-3 text-left text-[#0d141c] text-sm font-medium leading-normal">Stock</th>
              <th className="px-4 py-3 text-left text-[#0d141c] text-sm font-medium leading-normal">Price</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id} className="border-t border-t-[#cedbe8]">
                <td className="h-[56px] px-4 py-2 text-[#49739c] text-sm font-normal">{item.id}</td>
                <td className="h-[56px] px-4 py-2 text-[#49739c] text-sm font-normal">{item.name}</td>
                <td className="h-[56px] px-4 py-2 text-[#49739c] text-sm font-normal">{item.category}</td>
                <td className="h-[56px] px-4 py-2 text-[#49739c] text-sm font-normal">{item.stock}</td>
                <td className="h-[56px] px-4 py-2 text-[#49739c] text-sm font-normal">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;