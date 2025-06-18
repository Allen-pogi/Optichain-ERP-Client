import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDF from "./pdf";
import { useState } from "react";

const SamplePDF = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <textarea
        placeholder="Enter your text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <PDFDownloadLink
        document={<MyPDF content={input} />}
        fileName="my-document.pdf"
      >
        {({ loading }) => (loading ? "Preparing document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
};

export default SamplePDF;
