import React, { useState } from "react";
import { DUMMY_ITEMS } from "../../../../components/config/config"; // Adjust path as needed

const ItemsTable = ({ rows, setRows }) => {
  const [showItemPicker, setShowItemPicker] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Add item from picker to rows
  const handleAddItem = (item) => {
    setRows([...rows, { ...item }]);
    setShowItemPicker(false);
  };

  const estimatedExtCost = (row) => {
    const unitCost = parseFloat(row.unitCost) || 0;
    const orderQty = parseFloat(row.orderQty) || 0;

    const estimatedExtCost = unitCost * orderQty;
    return estimatedExtCost.toFixed(2);
  };

  return (
    <div className="mt-6">
      <div className="flex items-center space-x-2 mb-3">
        <button
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md"
          onClick={() => setShowItemPicker(true)}
          type="button"
        >
          <span className="material-icons text-xl">add</span>
        </button>
        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <span className="material-icons text-xl">remove</span>
        </button>
        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <span className="material-icons text-xl">edit</span>
        </button>
        <span className="text-gray-300">|</span>
        <button className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-300 text-sm font-medium">
          ADD ITEM
        </button>
        <button className="text-gray-700 px-4 py-1.5 rounded-md hover:bg-gray-100 text-sm">
          REQUISITION DETAILS
        </button>
        <div className="flex-grow"></div>
        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <span className="material-icons text-xl">height</span>
        </button>
        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <span className="material-icons text-xl">grid_view</span>
        </button>
      </div>
      {showItemPicker && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 ">
          <div className="bg-white rounded shadow-lg p-6 min-w-[400px] max-w-[56vw]">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold mb-4">Select Item to Add</h3>
              <button
                className="  "
                onClick={() => {
                  setShowItemPicker(false);
                  setSelectedIdx(null);
                }}
              >
                x
              </button>
            </div>
            <div className="overflow-x-auto max-w-full justify-end">
              <table className="min-w-full mb-4 ">
                <thead className="">
                  <tr className="bg-gray-100 py-8">
                    <th className="px-4 py-1 text-left  text-sm min-w-[160px]">
                      Inventory ID
                    </th>
                    <th className="px-4 py-1 text-left border-b-2 text-sm whitespace-nowrap truncate w-40">
                      Description
                    </th>
                    <th className="px-8  py-1  text-left text-sm">
                      Item Class
                    </th>
                    <th className="px-4 py-1 text-left text-sm">Item Status</th>
                    <th className="px-8 py-1 text-left text-sm">Type</th>
                    <th className="px-2 py-1 text-left text-sm">Base Unit</th>
                    <th className="px-8 py-1 text-left text-sm">Sales Unit</th>
                    <th className="px-8 py-1 text-left text-sm">
                      Purchase Unit
                    </th>
                    <th className="px-8 py-1 text-left text-sm">
                      Default Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DUMMY_ITEMS.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-blue-100 cursor-pointer ${selectedIdx === idx ? "bg-blue-200" : ""}`}
                      onClick={() => setSelectedIdx(idx)}
                    >
                      <td className="px-4 py-2 border-b-2 text-sm text-left min-w-[160px]">
                        {item.inventory}
                      </td>
                      <td
                        className="px-4 py- border-b-2 max-w-[240px] overflow-hidden text-ellipsis text-sm "
                        title={item.description}
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.description}
                      </td>
                      <td
                        className="px-8 py- border-b-2  text-sm whitespace-nowrap truncate max-w-[240px]"
                        title={item.itemclass}
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.itemclass}{" "}
                      </td>
                      <td className="px-4 py- border-b-2 text-sm">
                        {item.itemstatus}
                      </td>
                      <td className="px-8 min-w-[180px] overflow-hidden text-ellipsis border-b-2 text-sm ">
                        {item.type}
                      </td>
                      <td className="px-2 py- border-b-2 text-sm">
                        {item.baseunit}
                      </td>
                      <td className="px-8 py- border-b-2 text-sm">
                        {item.salesunit}
                      </td>
                      <td className="px-8 py- border-b-2 text-sm">
                        {item.purchaseunit}
                      </td>
                      <td className="px-8 py- border-b-2 text-sm">
                        {item.defaultprice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className={`px-4 py-1 rounded ${selectedIdx === null ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                disabled={selectedIdx === null}
                onClick={() => {
                  if (selectedIdx !== null) {
                    handleAddItem(DUMMY_ITEMS[selectedIdx]);
                    setSelectedIdx(null);
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                <input
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  type="checkbox"
                />
              </th>
              <th className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                <span className="material-icons text-base">flag</span>
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inventory
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subitem
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <sup>*</sup>UOM
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Qty.
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Est. Unit Cost
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Est. Ext. Cost
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vendor
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vendor Name
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vendor Ref.
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vendor Description
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Alternate ID
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Required Date
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Promised Date
              </th>
              <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Issue Status
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="px-3 py-3 whitespace-nowrap"></td>
                <td className="px-3 py-3 whitespace-nowrap"></td>
                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-500 ">
                  <input
                    className="w-full bg-transparent"
                    value={row.inventory || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].inventory = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.subitem || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].subitem = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500 min-w-[240px]">
                  <input
                    className="w-full bg-transparent"
                    value={row.description || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].description = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500 min-w-[120px]">
                  <input
                    className="w-full bg-transparent"
                    value={row.uom || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].uom = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.orderQty || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].orderQty = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.unitCost || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].unitCost = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={estimatedExtCost(row)}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.vendor || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].vendor = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.location || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].location = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.vendorName || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].vendorName = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.vendorRef || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].vendorRef = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.vendorDescription || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].vendorDescription = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>

                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.alternateID || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].alternateID = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>

                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.requiredDate || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].requiredDate = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.promisedDate || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].promisedDate = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>

                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <input
                    className="w-full bg-transparent"
                    value={row.issueStatus || ""}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[idx].issueStatus = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="pt-2 pr-2 flex justify-end">
        <div className="w-4 h-20 bg-gray-300 rounded-full relative">
          <div className="w-4 h-6 bg-gray-500 rounded-full absolute top-0"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ItemsTable;
