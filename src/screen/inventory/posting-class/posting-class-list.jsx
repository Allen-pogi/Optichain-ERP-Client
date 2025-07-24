import React from "react";
import Header from "../../../components/header";
import { useNavigate } from "react-router-dom";
import {
  posting_class_columns,
  posting_mock_data,
} from "../../../components/config/posting-class/config";

const PostingClass = () => {
  const navigate = useNavigate();

  const onRowDoubleClick = (row) => {
    navigate(`/edit_posting_class/${row.classId}`, { state: { row } });
  };

  return (
    <div className="bg-gray-100 h-screen overflow-hidden flex flex-col font-medium w-full">
      <Header />
      <div className="w-full mx-auto bg-white flex flex-col flex-grow overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-2 border-b shrink-0">
          <h1 className="text-xl font-semibold text-gray-800">
            Posting Classes
          </h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              CUSTOMIZATION{" "}
              <span className="material-icons align-middle text-sm">
                arrow_drop_down
              </span>
            </button>
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              TOOLS{" "}
              <span className="material-icons align-middle text-sm">
                arrow_drop_down
              </span>
            </button>
          </div>
        </header>

        {/* Toolbar */}
        <div className="px-4 py-2 border-b flex items-center space-x-4 bg-gray-50 shrink-0">
          <button className="text-gray-600 hover:text-gray-900">
            <span className="material-icons">refresh</span>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span
              className="material-icons"
              onClick={() =>
                navigate("/home/inventory/preferences/create_posting_class")
              }
            >
              add
            </span>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span className="material-icons">edit</span>
          </button>
          <div className="h-6 border-l border-gray-300" />
          <button className="text-gray-600 hover:text-gray-900">
            <span className="material-icons">delete</span>
          </button>
        </div>

        {/* Scrollable Table Area */}
        <div className="p-4 overflow-y-auto flex-grow">
          {/* Table Header Toolbar */}
          <div className="flex justify-between items-center mb-2 pb-2 border-b">
            <div className="text-gray-500 text-sm italic">
              Drag column header here to configure filter
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-600 hover:text-gray-900">
                <span className="material-icons">filter_list</span>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <span className="material-icons">more_vert</span>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <span className="material-icons">launch</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                  {posting_class_columns.map((col) => (
                    <th key={col.key} className="px-4 py-2 text-left">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-900">
                {posting_mock_data.map((row, i) => (
                  <tr
                    key={row.classId}
                    className="hover:bg-gray-50"
                    onDoubleClick={() => onRowDoubleClick(row)}
                  >
                    <td></td>
                    <td></td>
                    <td className="px-4 py-2">{row.classId}</td>
                    <td className="px-4 py-2">{row.description}</td>
                    <td className="px-4 py-2">{row.inventoryAccount}</td>
                    <td className="px-4 py-2">{row.salesAccount}</td>
                    <td className="px-4 py-2">{row.cogsAccount}</td>
                    <td className="px-4 py-2">{row.poAccrualAccount}</td>
                    <td className="px-4 py-2">{row.poDescription}</td>
                    <td className="px-4 py-2">{row.poSub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fake Scroll Bar Indicator */}
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center px-4 py-2 border-t bg-gray-50 shrink-0">
          <div className="text-sm text-gray-600">1–14 of 1047 records</div>
          <div className="flex items-center space-x-2">
            <button
              className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
              disabled
            >
              <span className="material-icons">first_page</span>
            </button>
            <button
              className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
              disabled
            >
              <span className="material-icons">chevron_left</span>
            </button>
            <div className="text-sm text-gray-600">
              <input
                type="text"
                value="1"
                className="w-10 text-center border rounded-md py-1"
                readOnly
              />{" "}
              of 75 pages
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <span className="material-icons">chevron_right</span>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <span className="material-icons">last_page</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PostingClass;
