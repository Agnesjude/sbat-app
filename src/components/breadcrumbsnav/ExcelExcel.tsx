import  React, {useState} from "react";
import * as ReactDOM from "react-dom";
import {
  ExcelExport,
  ExcelExportColumn,
} from "@progress/kendo-react-excel-export";
import tabledata from './tabledata.json';

//const data = products;



const ExportColumn = (data:any) => {

  const _exporter = React.createRef<ExcelExport>();
  const excelExport = () => {
    if (_exporter.current) {
      _exporter.current.save();
    }
  };

  return (
    <div>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={excelExport}
      >
     Excel spec column
      </button>

      <ExcelExport
        data={data.data}
        fileName="AssetJournal.xlsx"
        ref={_exporter}
        filterable={true}
      >
        <ExcelExportColumn field="caseId" title="Case Id" />
        <ExcelExportColumn field="caseType" title="caseType" />
        <ExcelExportColumn field="csuRP" title="csuRP" />
        <ExcelExportColumn field="caseStatus" title="caseStatus" />
        <ExcelExportColumn field="openDate" title="openDate" />
      </ExcelExport>

    </div>
  );
};


export default ExportColumn;