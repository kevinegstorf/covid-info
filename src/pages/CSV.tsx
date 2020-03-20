import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
// @ts-ignore
import CSVReader from "react-csv-reader";

export default function CSV() {
  const [state, setState] = React.useState([]);

  const handleForce = (data: any, fileInfo: any) => setState(data);

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header: any) => header.toLowerCase().replace(/\W/g, "_")
  };

  return (
    <div className="container">
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      <p>and then open the console</p>
      {state
        ? state.map((item: any) => {
            console.log(item);
            return <div key={item.lat}>{item.country_region}</div>;
          })
        : null}
    </div>
  );
}
