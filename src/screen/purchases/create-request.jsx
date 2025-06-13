import React, { useState } from "react";
import Header from "../../components/header";

const DUMMY_ITEMS = [
  { inventory: "Item001", itemclass:"MHE-SPR-LND", subitem: "A1", description: "Paper A4", uom: "Ream", orderQty: 1, unitCost: 100, extVendorCost: 100, location: "WH1", vendor: "VendorX" },
  { inventory: "Item002", itemclass:"MHE-SPR-LND", subitem: "B2", description: "Pen Blue", uom: "Box", orderQty: 2, unitCost: 50, extVendorCost: 100, location: "WH2", vendor: "VendorY" },
  { inventory: "Item003", itemclass:"MHE-SPR-LND", subitem: "C3", description: "Notebook", uom: "Piece", orderQty: 5, unitCost: 20, extVendorCost: 100, location: "WH1", vendor: "VendorZ" },
   { inventory: "Item004", itemclass:"MHE-SPR-LND", subitem: "C3", description: "Notebook", uom: "Piece", orderQty: 5, unitCost: 20, extVendorCost: 100, location: "WH1", vendor: "VendorZ" }
];

const CreateRequest = () => {

   const [rows, setRows] = useState([]);
 const [showItemPicker, setShowItemPicker] = useState(false);
 const [selectedIdx, setSelectedIdx] = useState(null);


 // Add item from picker to rows
  const handleAddItem = (item) => {
    setRows([...rows, { ...item }]);
    setShowItemPicker(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-roboto">
      {/* Header */}
<Header/>

      {/* Subnav */}
      <div className="bg-white shadow-sm pb-4 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Requests</h1>
          <nav className="flex items-center space-x-6 text-sm text-gray-600">
            <a className="hover:text-blue-600 flex items-center space-x-1" href="#">
              <span className="material-icons text-base">notes</span>
              <span>NOTES</span>
            </a>
            <a className="hover:text-blue-600" href="#">ACTIVITIES</a>
            <a className="hover:text-blue-600" href="#">FILES</a>
            <a className="hover:text-blue-600" href="#">NOTIFICATIONS</a>
            <a className="hover:text-blue-600" href="#">CUSTOMIZATION</a>
            <a className="hover:text-blue-600 flex items-center space-x-1" href="#">
              <span>TOOLS</span>
              <span className="material-icons text-base">arrow_drop_down</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Toolbar */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 flex items-center space-x-1 text-sm">
                <span className="material-icons text-lg">save</span>
                <span>SAVE &amp; CLOSE</span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">content_copy</span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">add_circle_outline</span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">delete_outline</span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">cancel</span>
              </button>
              <span className="text-gray-300">|</span>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">chevron_left</span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">chevron_right</span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">first_page</span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons">last_page</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-700 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 text-sm flex items-center space-x-1">
                <span>ACTIONS</span>
                <span className="material-icons text-base">arrow_drop_down</span>
              </button>
              <button className="text-gray-700 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 text-sm flex items-center space-x-1">
                <span>REPORTS</span>
                <span className="material-icons text-base">arrow_drop_down</span>
              </button>
            </div>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="material-icons">unfold_more</span>
            </button>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-6">
            {/* Column 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="ref-nbr">Ref. Nbr.:</label>
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-blue-100 text-blue-700 text-sm font-semibold">&lt;NEW&gt;</span>
                <input className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3" id="ref-nbr" type="text" />
              </div>
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="request-class"><sup>*</sup> Request Class:</label>
              <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3" id="request-class" type="text" />
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="status">Status:</label>
              <select className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3" id="status">
                <option>On Hold</option>
                <option>Pending</option>
                <option>Approved</option>
              </select>
              <div className="mt-2 flex items-center">
                <input defaultChecked className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" id="hold" name="hold" type="checkbox" />
                <label className="ml-2 block text-sm text-gray-900" htmlFor="hold">Hold</label>
              </div>
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="date"><sup>*</sup> Date:</label>
              <div className="relative">
                <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10" id="date" type="text" defaultValue="6/11/2025" />
                <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">calendar_today</span>
              </div>
              <div className="mt-2 flex items-center">
                <input className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" id="approved" name="approved" type="checkbox" />
                <label className="ml-2 block text-sm text-gray-900" htmlFor="approved">Approved</label>
              </div>
            </div>
            {/* Column 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="priority">Priority:</label>
              <select className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3" id="priority">
                <option>Normal</option>
                <option>High</option>
                <option>Low</option>
              </select>
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="requested-by"><sup>*</sup> Requested By:</label>
              <div className="relative">
                <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10" id="requested-by" type="text" />
                <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">search</span>
              </div>
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="location"><sup>*</sup> Location:</label>
              <div className="relative">
                <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10" id="location" type="text" />
                <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">search</span>
              </div>
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="department">Department:</label>
              <div className="relative">
                <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10" id="department" type="text" />
                <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">search</span>
              </div>
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="currency">Currency:</label>
              <div className="flex items-center space-x-2 mt-1">
                <select className="block w-1/3 shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3" id="currency">
                  <option>PHP</option>
                  <option>USD</option>
                </select>
                <input className="block w-1/3 shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 text-right" type="text" defaultValue="1.00" />
                <button className="text-blue-600 hover:underline text-sm">VIEW BASE</button>
              </div>
            </div>
            {/* Column 3 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="est-cost">Est. Ext. Cost:</label>
              <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 text-right bg-gray-50" id="est-cost" readOnly type="text" defaultValue="0.00" />
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1" htmlFor="open-qty">Open Qty:</label>
              <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 text-right bg-gray-50" id="open-qty" readOnly type="text" defaultValue="0.00" />
              <label className="block text-sm font-medium text-gray-700 mt-[6.5rem] mb-1" htmlFor="description">Description:</label>
              <textarea className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3" id="description" rows="3"></textarea>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              <a className="tab tab-active border-b-2 border-blue-600 text-blue-600 font-semibold pb-2" href="#">DOCUMENT DETAILS</a>
              <a className="tab text-gray-500 hover:text-gray-700 hover:border-gray-300 pb-2" href="#">SHIPPING INSTRUCTIONS</a>
              <a className="tab text-gray-500 hover:text-gray-700 hover:border-gray-300 pb-2" href="#">VENDOR INFO</a>
              <a className="tab text-gray-500 hover:text-gray-700 hover:border-gray-300 pb-2" href="#">APPROVAL DETAILS</a>
              <a className="tab text-gray-500 hover:text-gray-700 hover:border-gray-300 pb-2" href="#">OTHER INFORMATION</a>
            </nav>
          </div>

          {/* Items Table */}
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
              <button className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-300 text-sm font-medium">ADD ITEM</button>
              <button className="text-gray-700 px-4 py-1.5 rounded-md hover:bg-gray-100 text-sm">REQUISITION DETAILS</button>
              <div className="flex-grow"></div>
              <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons text-xl">height</span>
              </button>
              <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="material-icons text-xl">grid_view</span>
              </button>
            </div>



         {showItemPicker && (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
    <div className="bg-white rounded shadow-lg p-6 min-w-[400px]">
      <h3 className="text-lg font-bold mb-4">Select Item to Add</h3>
      <table className="min-w-full mb-4">
        <thead>
          <tr>
            <th className="px-8 py-1 text-left">Inventory</th>
            <th className="px-8 py-1 text-left">Description</th>
            <th className="px-8 py-1 text-left">Item Class</th>
            <th className="px-8 py-1 text-left">UOM</th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_ITEMS.map((item, idx) => (
            <tr
              key={idx}
              className={`hover:bg-blue-100 cursor-pointer ${selectedIdx === idx ? "bg-blue-200" : ""}`}
              onClick={() => setSelectedIdx(idx)}
            >
              <td className="px-8 py-1 border-b-2">{item.inventory}</td>
              <td className="px-8 py-1 border-b-2">{item.description}</td>
              <td className="px-8 py-1 border-b-2">{item.itemclass}</td>
              <td className="px-8 py-1 border-b-2">{item.uom}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
        <button
          className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => {
            setShowItemPicker(false);
            setSelectedIdx(null);
          }}
        >
          Cancel
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
                      <input className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" type="checkbox" />
                    </th>
                    <th className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                      <span className="material-icons text-base">flag</span>
                    </th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inventory</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subitem</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><sup>*</sup>UOM</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Qty.</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Unit Cost</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Ext. Vendor Cost</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                  </tr>
                </thead>
                
                   <tbody className="bg-white divide-y divide-gray-200">
                  {rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-3 py-3 whitespace-nowrap"></td>
                      <td className="px-3 py-3 whitespace-nowrap"></td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        <input
                          className="w-full bg-transparent"
                          value={row.inventory || ""}
                          onChange={e => {
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
                          onChange={e => {
                            const newRows = [...rows];
                            newRows[idx].subitem = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        <input
                          className="w-full bg-transparent"
                          value={row.description || ""}
                          onChange={e => {
                            const newRows = [...rows];
                            newRows[idx].description = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        <input
                          className="w-full bg-transparent"
                          value={row.uom || ""}
                          onChange={e => {
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
                          onChange={e => {
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
                          onChange={e => {
                            const newRows = [...rows];
                            newRows[idx].unitCost = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        <input
                          className="w-full bg-transparent"
                          value={row.extVendorCost || ""}
                          onChange={e => {
                            const newRows = [...rows];
                            newRows[idx].extVendorCost = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        <input
                          className="w-full bg-transparent"
                          value={row.location || ""}
                          onChange={e => {
                            const newRows = [...rows];
                            newRows[idx].location = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        <input
                          className="w-full bg-transparent"
                          value={row.vendor || ""}
                          onChange={e => {
                            const newRows = [...rows];
                            newRows[idx].vendor = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pt-2 pr-2 flex justify-end">
              <div className="w-4 h-20 bg-gray-300 rounded-full relative">
                <div className="w-4 h-6 bg-gray-500 rounded-full absolute top-0"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-2 border-t border-gray-300">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-2">
          <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md">
            <span className="material-icons text-xl">chevron_left</span>
          </button>
          <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md">
            <span className="material-icons text-xl">chevron_right</span>
          </button>
          <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md">
            <span className="material-icons text-xl">unfold_less</span>
          </button>
          <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md">
            <span className="material-icons text-xl">unfold_more</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CreateRequest;