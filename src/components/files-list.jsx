import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config/config";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/files/`); // Make sure baseURL is correct
        setFiles(res.data);
      } catch (err) {
        console.error("Error fetching files:", err);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>

      <ul>
        {files.map(
          (file) => (
            console.log("Fetched files:", files),
            console.log(file.url),
            (
              <li key={file.filename} className="mb-2">
                📄 {file.originalName}{" "}
                {file.url ? (
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Preview
                  </a>
                ) : (
                  <span className="text-gray-400 italic">
                    No preview available
                  </span>
                )}
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
};

export default FileList;
