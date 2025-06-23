import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/header";
import { DUMMY_ITEMS, requests } from "../../components/config/config";
import Tabs from "../../components/tabs/tabs";
import ItemsTable from "../../components/tabs/ItemsTable";
import MyPDF from "../../components/pdf/pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Sidebar from "../../components/sidebar";

const EditRequest = () => {
  //this  is the params that get the value of the ref from the url
  const { ref } = useParams();
  //so this means that the value of the ref of this is the one that comes from the url

  const request = requests.find((r) => r.ref === ref);

  const [rows, setRows] = useState(request?.items || []);

  const [showItemPicker, setShowItemPicker] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  // Add item from picker to rows

  const handleOpenNotes = () => {
    setNote(savedNote);
    setShowNotes(true);
  };

  // Save note (update both savedNote and textarea)
  const handleNote = () => {
    setSavedNote(note);
    setShowNotes(false);
  };

  // Close modal without saving
  const handleCloseNotes = () => {
    setShowNotes(false);
  };
  const formatDateForInput = (dateStr) => {
    if (!dateStr) return "";
    const [month, day, year] = dateStr.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getTotalValues = (rows) => {
    const totalOrderQty = rows.reduce(
      (sum, row) => sum + Number(row.orderQty || 0),
      0
    );
    const totalUnitCost = rows.reduce(
      (sum, row) => sum + Number(row.unitCost || 0),
      0
    );
    const totalExtCost = rows.reduce((sum, row) => {
      const qty = Number(row.orderQty || 0);
      const cost = Number(row.unitCost || 0);
      return sum + qty * cost;
    }, 0);
    return { totalOrderQty, totalUnitCost, totalExtCost };
  };

  const { totalOrderQty, totalUnitCost, totalExtCost } = getTotalValues(rows);

  const navigate = useNavigate();

  const handleSave = () => {
    const updatedExtCost = totalExtCost.toFixed(2);

    // 1. Find the original request in dummy data and update it
    const index = requests.findIndex((r) => r.ref === request.ref);
    if (index !== -1) {
      requests[index].extCost = updatedExtCost;
    }

    // 2. Navigate back to request list page
    navigate("/home/request");
  };
  return (
    <div
      className="flex h- bg-gray-100 font-roboto    h-screen overflow-hidden "
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Sidebar */}
      <div className="w-[200px] ">
        <Sidebar className="h-full" />
      </div>

      <div className="bg-gray-100 h-screen w-full flex flex-col font-roboto overflow-hidden">
        {/* Header */}

        <Header />

        {/* Subnav */}
        <div className="overflow-auto">
          <div className="bg-white shadow-sm  border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-800">Requests</h1>
              <nav className="flex items-center space-x-6 text-sm text-gray-600">
                <button
                  className="hover:text-blue-600 flex items-center space-x-1"
                  onClick={handleOpenNotes}
                  type="button"
                >
                  <span className="material-icons text-base">notes</span>
                  <span>NOTES</span>
                </button>
                <a className="hover:text-blue-600" href="#">
                  ACTIVITIES
                </a>
                <a className="hover:text-blue-600" href="#">
                  FILES
                </a>
                <a className="hover:text-blue-600" href="#">
                  NOTIFICATIONS
                </a>
                <a className="hover:text-blue-600" href="#">
                  CUSTOMIZATION
                </a>
                <a
                  className="hover:text-blue-600 flex items-center space-x-1"
                  href="#"
                >
                  <span>TOOLS</span>
                  <span className="material-icons text-base">
                    arrow_drop_down
                  </span>
                </a>
              </nav>
            </div>
          </div>

          {/* <div className="mt-4 text-sm text-right text-gray-700">
  <p><strong>Total Order Qty:</strong> {totalOrderQty}</p>
  <p><strong>Total Unit Cost:</strong> {totalUnitCost.toFixed(2)}</p>
  <p><strong>Total Ext. Vendor Cost:</strong> {totalExtCost.toFixed(2)}</p>
</div> */}

          {/* Main Content */}
          <main className="flex-grow container mx-auto px-4 py-4 overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Toolbar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSave}
                    className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm  flex items-center space-x-1 text-sm"
                  >
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
                    <span className="material-icons text-base">
                      arrow_drop_down
                    </span>
                  </button>
                  <button className="text-gray-700 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 text-sm flex items-center space-x-1">
                    <span>REPORTS</span>
                    <span className="material-icons text-base">
                      arrow_drop_down
                    </span>
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
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="ref-nbr"
                  >
                    Ref. Nbr.:
                  </label>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-blue-100 text-blue-700 text-sm font-semibold">
                      &lt;NEW&gt;
                    </span>
                    <input
                      className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                      id="ref-nbr"
                      type="text"
                      defaultValue={request?.ref}
                    />
                  </div>
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="request-class"
                  >
                    <sup>*</sup> Request Class:
                  </label>
                  <input
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                    id="request-class"
                    type="text"
                    defaultValue={request?.requestClass}
                  />
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="status"
                  >
                    Status:
                  </label>
                  <select
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                    id="status"
                    defaultValue={request?.status}
                  >
                    <option>On Hold</option>
                    <option>Pending</option>
                    <option>Approved</option>
                  </select>
                  <div className="mt-2 flex items-center">
                    <input
                      defaultChecked
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      id="hold"
                      name="hold"
                      type="checkbox"
                    />
                    <label
                      className="ml-2 block text-sm text-gray-900"
                      htmlFor="hold"
                    >
                      Hold
                    </label>
                  </div>
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="date"
                  >
                    <sup>*</sup> Date:
                  </label>
                  <div className="relative">
                    <input
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10"
                      id="date"
                      type="date"
                      defaultValue={
                        request ? formatDateForInput(request.date) : ""
                      }
                    />
                  </div>
                  <div className="mt-2 flex items-center">
                    <input
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      id="approved"
                      name="approved"
                      type="checkbox"
                    />
                    <label
                      className="ml-2 block text-sm text-gray-900"
                      htmlFor="approved"
                    >
                      Approved
                    </label>
                  </div>
                </div>
                {/* Column 2 */}
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="priority"
                  >
                    Priority:
                  </label>
                  <select
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                    id="priority"
                    defaultValue={request?.priority}
                  >
                    <option>Normal</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="requested-by"
                  >
                    <sup>*</sup> Requested By:
                  </label>
                  <div className="relative">
                    <input
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10"
                      id="requested-by"
                      type="text"
                      defaultValue={request?.requestedBy}
                    />
                    <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      search
                    </span>
                  </div>
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="location"
                  >
                    <sup>*</sup> Location:
                  </label>
                  <div className="relative">
                    <input
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10"
                      id="location"
                      type="text"
                      defaultValue={request?.location}
                    />
                    <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      search
                    </span>
                  </div>
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="department"
                  >
                    Department:
                  </label>
                  <div className="relative">
                    <input
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-10"
                      id="department"
                      type="text"
                      defaultValue={request?.department}
                    />
                    <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      search
                    </span>
                  </div>
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="currency"
                  >
                    Currency:
                  </label>
                  <div className="flex items-center space-x-2 mt-1">
                    <select
                      className="block w-1/3 shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                      id="currency"
                      defaultValue={request?.currency}
                    >
                      <option>PHP</option>
                      <option>USD</option>
                    </select>
                    <input
                      className="block w-1/3 shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 text-right"
                      type="text"
                      defaultValue="1.00"
                    />
                    <button className="text-blue-600 hover:underline text-sm">
                      VIEW BASE
                    </button>
                  </div>
                </div>
                {/* Column 3 */}
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="est-cost"
                  >
                    Est. Ext. Cost:
                  </label>
                  <input
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 text-right bg-gray-50"
                    id="est-cost"
                    readOnly
                    type="text"
                    value={totalExtCost.toFixed(2)}
                  />
                  <label
                    className="block text-sm font-medium text-gray-700 mt-4 mb-1"
                    htmlFor="open-qty"
                  >
                    Open Qty:
                  </label>
                  <input
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3 text-right bg-gray-50"
                    id="open-qty"
                    readOnly
                    type="text"
                    value={totalOrderQty}
                  />
                  <label
                    className="block text-sm font-medium text-gray-700 mt-[6.5rem] mb-1"
                    htmlFor="description"
                  >
                    Description:
                  </label>
                  <textarea
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                    id="description"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              {/* Tabs */}
              {showNotes && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white rounded shadow-lg p-6 min-w-[400px]">
                    <h2 className="text-lg font-bold mb-4">Notes</h2>
                    <textarea
                      className="block w-[32em] h-[12em] shadow-sm sm:text-sm  border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Enter your note here..."
                    />
                    <div className="flex justify-end mt-2 space-x-2">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleNote}
                        type="button"
                      >
                        Save Note
                      </button>
                      <button
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={handleCloseNotes}
                        type="button"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <PDFDownloadLink
                document={<MyPDF rows={rows} note={note} />}
                fileName="request.pdf"
              >
                {({ loading }) => (loading ? "Loading PDF..." : "Download PDF")}
              </PDFDownloadLink>

              <Tabs itemsTable={<ItemsTable rows={rows} setRows={setRows} />} />
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
      </div>
    </div>
  );
};

export default EditRequest;
