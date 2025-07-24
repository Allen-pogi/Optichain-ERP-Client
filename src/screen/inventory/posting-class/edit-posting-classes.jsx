import React from "react";
import Header from "../../../components/header";
import { posting_mock_data } from "../../../components/config/posting-class/config";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/sidebar";
import PostingClassTab from "./tabs/Tab";
import ItemsTable from "../../purchases/request/tabs/ItemsTable";
import General from "./tabs/general";

const EditPostingClasses = () => {
  const options = ["Posting Class"];
  const combineOptions = ["PPP-PPP-PPP-PPP-PPPPPP-PPPI"];
  const { classId } = useParams();

  const postingclass = posting_mock_data.find((id) => id.classId === classId);

  return (
    <div
      className="bg-gray-100  flex font-roboto shadow-sm  min-h-screen w-full overflow-auto"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="lg:w-[240px] w-[128px] ">
        <Sidebar className="h-full" />
      </div>
      <div className="bg-gray-100 h-screen w-full flex flex-col font-roboto overflow-hidden">
        <Header />
        <div className=" h-[calc(100vh-100px)] overflow-y-auto bg-gray-100 rounded-md">
          <div className="flex justify-between items-center  border-b bg-white border-gray-200 p-4 ">
            <div>
              <div className="text-sm text-gray-500">Posting Classes</div>
              <h1 className="text-xl font-bold">{postingclass.classId}</h1>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              {["NOTES", "ACTIVITIES", "FILES", "CUSTOMIZATION"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center space-x-1 hover:text-blue-600"
                  >
                    {item === "NOTES" && (
                      <span className="material-icons text-base">note_add</span>
                    )}
                    <span>{item}</span>
                  </a>
                )
              )}
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-blue-600"
              >
                <span>TOOLS</span>
                <span className="material-icons text-base">
                  arrow_drop_down
                </span>
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="p-4 min-h-screen overflow-y-auto bg-white rounded-md ">
              {/* Toolbar */}
              <div className="flex items-center space-x-2 mb-6 text-gray-500">
                {[
                  "arrow_back",
                  "save",
                  "content_copy",
                  "|",
                  "add",
                  "delete_outline",
                  "|",
                  "first_page",
                  "chevron_left",
                  "chevron_right",
                  "last_page",
                ].map((icon, i) =>
                  icon === "|" ? (
                    <div key={i} className="border-l h-5 mx-2"></div>
                  ) : (
                    <button
                      key={i}
                      className="p-1 hover:bg-gray-100 rounded"
                      title={icon}
                    >
                      <span className="material-icons">{icon}</span>
                    </button>
                  )
                )}
              </div>

              {/* Top form */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                <div className="flex items-center">
                  <label className="w-1/3 text-gray-600" htmlFor="class-id">
                    Class ID:
                  </label>
                  <div className="relative flex-grow">
                    <input
                      id="class-id"
                      type="text"
                      defaultValue={postingclass.classId}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                    <span className="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                      search
                    </span>
                  </div>
                </div>

                <div></div>

                <div className="flex items-center">
                  <label className="w-1/3 text-gray-600" htmlFor="description">
                    Description:
                  </label>
                  <input
                    id="description"
                    type="text"
                    defaultValue={postingclass.description}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              {/* Tabs */}
              <PostingClassTab general={<General />} glAccounts={""} />

              {/* Fields */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostingClasses;
