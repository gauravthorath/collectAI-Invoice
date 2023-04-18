import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function JsonDropzone({ onJsonDrop }) {
  const [fileError, setFileError] = useState(null);

  const handleJsonDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 1) {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        try {
          const jsonData = JSON.parse(reader.result);
          onJsonDrop(jsonData);
          setFileError(null);
        } catch (e) {
          setFileError("Invalid file format");
        }
      };
      reader.readAsText(acceptedFiles[0]);
    } else {
      setFileError("Please select only one file");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleJsonDrop,
    accept: ".json",
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>Drag and drop a JSON file here, or click to select file</p>
      {fileError && <p className="error">{fileError}</p>}
    </div>
  );
}

export default JsonDropzone;
