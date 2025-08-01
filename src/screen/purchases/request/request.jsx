import React, { useEffect, useState } from "react";
import { BiEdit, BiPlus, BiRefresh, BiTrash } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/header";
import RequestTable from "../../../components/tables/request-table";
import { requests } from "../../../components/config/config";

const Request = () => {
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState(currentPage);

  const requestsPerPage = 12;
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredRequests = requests.filter((req) => {
    const matchPriority =
      priorityFilter === "All" || req.priority === priorityFilter;
    const matchStatus = statusFilter === "All" || req.status === statusFilter;
    const matchSearch =
      searchQuery === "" ||
      Object.values(req).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(searchQuery.toLowerCase())
      );

    //if you want to filter by title or requestedBy specifically, you can uncomment the following lines:
    //     const matchSearch = searchQuery === "" ||
    // req.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // req.requestedBy.toLowerCase().includes(searchQuery.toLowerCase());

    return matchPriority && matchStatus && matchSearch;
  });

  const handleRowDoubleClick = (request) => {
    navigate(`/edit_request/${request.ref}`, { state: { request } });
  };

  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  console.log(
    "filteredRequests:",
    filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest)
  );
  console.log("Filtered Requests:", filteredRequests.length);

  //this is where the filtered is pass to currentRequests variable
  const currentRequests = filteredRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  const totalPages = Math.ceil(filteredRequests.length / requestsPerPage);

  useEffect(() => {
    setPageInput(currentPage);
  }, [currentPage]);

  return (
    <div className="bg-white h-screen w-full">
      <Header />
      <div className="overflow-y-auto h-[calc(100vh-80px)]">
        <header className="flex justify-between items-center  border-gray-300">
          <div className="container px-4  flex items-center justify-between">
            <div className="flex">
              <h1 className="text-2xl font-semibold text-gray-800">Requests</h1>
              <button className="ml-2 text-gray-500 hover:text-gray-700">
                <span className="material-icons">star_border</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-800 p-2 rounded-md hover:bg-gray-200">
              TOOLS
              <span className="material-icons align-middle text-sm">
                arrow_drop_down
              </span>
            </button>
          </div>
        </header>

        <div className="bg-white shadow-md rounded-lg w-full  overflow- ">
          <div className="w-full overflow-x-auto">
            <div className="flex justify-between items-center w-full px-6 border-b border-gray-200 bg-white">
              <div className="flex items-center space-x-2 w-full">
                <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                  <BiRefresh className="inline-block text-2xl" />
                </button>
                <Link to="/home/purchases/create_request">
                  <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                    <BiPlus className="inline-block text-2xl" />
                  </button>
                </Link>
                <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                  <BiEdit className="inline-block text-2xl" />
                </button>
                <div className="border-l h-6 border-blue-400 mx-1"></div>
                <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                  <BiTrash className="inline-block text-2xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 py-4 border-b border-gray-200 h-[]">
            <div className="flex space-x-4">
              <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2 px-1 focus:outline-none">
                ALL RECORDS
              </button>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-700 pb-2 px-1 focus:outline-none">
                MY REQUESTS
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="px-6  flex items-center justify-between border-b border-gray-200 h-[3em]">
            <div className="flex items-center space-x-4">
              <div>
                <label
                  className="text-sm text-gray-600 mr-1"
                  htmlFor="status-filter"
                >
                  Status:
                </label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>All</option>
                  <option>Open</option>
                  <option>Pending Approval</option>
                  <option>Closed</option>
                </select>
              </div>
              <div>
                <label
                  className="text-sm text-gray-600 mr-1"
                  htmlFor="priority-filter"
                >
                  Priority:
                </label>
                <select
                  id="priority-filter"
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>All</option>
                  <option>High</option>
                  <option>Normal</option>
                </select>
              </div>
              <div>
                <label
                  className="text-sm text-gray-600 mr-1"
                  htmlFor="date-filter"
                >
                  Date:
                </label>
                <select
                  className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  id="date-filter"
                >
                  <option>All</option>
                </select>
              </div>
              <div>
                <label
                  className="text-sm text-gray-600 mr-1"
                  htmlFor="requested-by-filter"
                >
                  Requested By:
                </label>
                <select
                  className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  id="requested-by-filter"
                >
                  <option>All</option>
                </select>
              </div>
            </div>
            <div className="p-4">
              <input
                type="text"
                placeholder="Search requests..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // reset to page 1 when searching
                }}
                className="w-full sm:w-3/4 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Table */}
          <RequestTable
            currentRequests={currentRequests}
            searchQuery={searchQuery}
            onRowDoubleClick={handleRowDoubleClick}
          />

          {/* Pagination (Static Example) */}
          <div className="px-6 py-21 flex items-center justify-between border-t border-gray-200 h-[em]">
            <div className="text-sm text-gray-600">
              Showing {indexOfFirstRequest + 1} to{" "}
              {Math.min(indexOfLastRequest, filteredRequests.length)} of{" "}
              {filteredRequests.length} records
            </div>
            <div className="flex items-center space-x-1">
              <button
                className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <span className="material-icons">first_page</span>
              </button>
              <button
                className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <span className="material-icons">chevron_left</span>
              </button>
              <input
                className="w-10 text-center border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
                onBlur={() => {
                  const page = Number(pageInput);
                  if (page >= 1 && page <= totalPages) {
                    setCurrentPage(page);
                  } else {
                    setPageInput(currentPage); // reset if invalid
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const page = Number(pageInput);
                    if (page >= 1 && page <= totalPages) {
                      setCurrentPage(page);
                    } else {
                      setPageInput(currentPage);
                    }
                  }
                }}
              />

              <span className="text-sm text-gray-600">
                of {totalPages} pages
              </span>
              <button
                className="p-1 text-gray-500 hover:text-gray-700"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <span className="material-icons">chevron_right</span>
              </button>
              <button
                className="p-1 text-gray-500 hover:text-gray-700"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <span className="material-icons">last_page</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
