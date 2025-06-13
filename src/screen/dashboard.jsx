import React from "react";  
import StatCard from "../components/statcard";
import QuickButton from "../components/quickbutton";

const activities = [
  { activity: "New order placed", date: "2024-07-26", user: "Alice" },
  { activity: "Inventory updated", date: "2024-07-25", user: "Bob" },
  { activity: "Customer added", date: "2024-07-24", user: "Charlie" },
  { activity: "Report generated", date: "2024-07-23", user: "David" },
  { activity: "Settings changed", date: "2024-07-22", user: "Eve" },
];

const Dashboard = () => {return (
     <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Dashboard
              </p>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <StatCard label="Total Sales" value="$250,000" change="+10%" />
              <StatCard label="Orders" value="1,200" change="+5%" />
              <StatCard label="Customers" value="500" change="+8%" />
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Recent Activities
            </h2>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-lg border border-[#cedbe8] bg-white">
                <table className="flex-1 min-w-full">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                        Activity
                      </th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                        User
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((row, idx) => (
                      <tr key={idx} className="border-t border-t-[#cedbe8]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                          {row.activity}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                          {row.date}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                          {row.user}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Quick Access
            </h2>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <QuickButton label="Sales" active />
                <QuickButton label="Inventory" />
              </div>
            </div>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <QuickButton label="HR" active />
                    <QuickButton label="Reports" />
                </div>
                </div>
            </div>
);}

export default Dashboard;