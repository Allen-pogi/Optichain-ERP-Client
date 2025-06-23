import React from "react";

const AccountClassesPage = () => {
  return (
    <div className="flex flex-col h-screen font-roboto bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-slate-800">
              Account Classes
            </h1>
            <button className="ml-2 text-slate-500 hover:text-slate-700">
              <span className="material-icons text-lg">star_border</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
              href="#"
            >
              CUSTOMIZATION
            </a>
            <a
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
              href="#"
            >
              TOOLS
            </a>
            <span className="material-icons text-slate-500 hover:text-slate-700">
              more_vert
            </span>
          </div>
        </div>
      </header>

      <main className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {[
                  "refresh",
                  "add",
                  "remove",
                  "edit",
                  "content_cut",
                  "content_copy",
                  "content_paste",
                  "file_upload",
                ].map((icon) => (
                  <button
                    key={icon}
                    className="p-2 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-700"
                  >
                    <span className="material-icons">{icon}</span>
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                  search
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-3 text-left w-12"></th>
                    <th className="px-4 py-3 text-left w-12"></th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">
                      Account Class ID<span className="text-red-500">*</span>
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">
                      Description<span className="text-red-500">*</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  {[
                    {
                      id: "ACAPSTOK",
                      type: "Liability",
                      desc: "Authorized Capital Stock",
                    },
                    {
                      id: "ACPAYAEXP",
                      type: "Liability",
                      desc: "Accounts Payable & Accrued Ex.",
                    },
                    { id: "AP", type: "Liability", desc: "Accounts Payable" },
                    {
                      id: "APOTHERS",
                      type: "Liability",
                      desc: "Accounts Payable Others",
                    },
                    { id: "AR", type: "Asset", desc: "Accounts Receivables" },
                    {
                      id: "AROTHERS",
                      type: "Asset",
                      desc: "Advances to Customer",
                    },
                    { id: "CAPITAL", type: "Liability", desc: "Share capital" },
                    {
                      id: "CASHASSET",
                      type: "Asset",
                      desc: "Cash and Cash equivalents",
                    },
                    { id: "CMNSTOCK", type: "Liability", desc: "Common stock" },
                    { id: "COGS", type: "Expense", desc: "COST OF GOOD SOLD" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-4 py-2 text-center">
                        <span className="material-icons text-slate-400 text-base">
                          chevron_right
                        </span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 py-2 font-medium">{row.id}</td>
                      <td className="px-4 py-2">{row.type}</td>
                      <td className="px-4 py-2">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 sticky bottom-0 z-10">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center">
          <div className="flex items-center space-x-1">
            {["first_page", "chevron_left", "chevron_right", "last_page"].map(
              (icon) => (
                <button
                  key={icon}
                  className="p-2 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-700"
                >
                  <span className="material-icons">{icon}</span>
                </button>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccountClassesPage;
