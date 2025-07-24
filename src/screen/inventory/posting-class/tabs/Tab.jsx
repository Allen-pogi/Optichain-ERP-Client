// In your Tabs.jsx
import React, { useState } from "react";

const tabList = ["GENARAL", "GL ACCOUNTS"];

const PostingClassTab = ({ glAccounts, general }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
          {tabList.map((tab, idx) => (
            <button
              key={tab}
              type="button"
              className={`tab pb-2 font-semibold ${
                activeTab === idx
                  ? "tab-active border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {activeTab === 0 ? general : ""}
        {activeTab === 1 ? glAccounts : ""}
      </div>
    </div>
  );
};

export default PostingClassTab;
