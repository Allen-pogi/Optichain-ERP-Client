import React, { useState, useEffect } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const highlightMatch = (text, query) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-yellow-200 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const RequestTable = ({ currentRequests, searchQuery, onRowDoubleClick }) => {
  return (
    <div className="overflow-x-auto h-[25em] w-full ">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8 py-2">
              <AttachFileOutlinedIcon
                style={{ width: "1rem", height: "1rem" }}
              />
            </th>
            <th className=" px-1 text-left  text-gray-500 uppercase tracking-wider">
              <DescriptionOutlinedIcon
                style={{ width: "1rem", height: "1rem" }}
              />
            </th>

            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ref. Nbr.
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Request Class
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Requested By
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium w-24 text-gray-500 uppercase tracking-wider">
              Est. Ext. Cost
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Currency
            </th>
            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created On
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentRequests.map((req, idx) => (
            <tr
              key={req.ref}
              onDoubleClick={() => onRowDoubleClick(req)}
              className="hover:bg-gray-100"
            >
              <td className="px-2 whitespace-nowrap">
                <span className="material-icons text-gray-400 text-base">
                  {req.statusIcon}
                </span>
              </td>
              <td className="px-1 whitespace-nowrap">
                <span
                  className={`material-icons ${req.notes ? "text-yellow-500" : "text-gray-400"} text-base`}
                >
                  {req.icon}
                </span>
              </td>
              <td className="px-2 py-1 text-sm text-blue-600">
                {highlightMatch(req.ref, searchQuery)}
              </td>
              <td className="px-2 py-1 text-sm text-gray-700">{req.status}</td>
              <td className="px-2 py-1 text-sm text-gray-700">
                {req.priority}
              </td>
              <td className="px-2 py-1 text-sm text-gray-700">{req.date}</td>
              <td className="px-2 py-1 text-sm text-gray-700">
                {req.requestClass}
              </td>
              <td className="px-2 py-1 text-sm text-gray-700">
                {req.requestedBy}
              </td>
              <td className="px-2 py-1 text-sm text-gray-700">
                {req.location}
              </td>
              <td className="px-2 py-1 text-sm text-gray-700">
                {req.department}
              </td>
              <td
                className="px-2 py-1 text-sm text-gray-700 max-w-[200px] overflow-hidden text-ellipsis"
                title={req.description}
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {highlightMatch(req.description, searchQuery)}
              </td>
              <td className="px-2 py-1 text-sm text-gray-700 text-left">
                {req.extCost}
              </td>
              <td className="px-2 py-1 text-sm text-gray-700 text-left">PHP</td>
              <td className="px-2 py-1 text-sm text-gray-700 text-left">
                {req.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
