import React, { useState, useRef, useEffect } from "react";
import { useTable, usePagination, useGlobalFilter, useFilters, useRowState } from "react-table";
import BreadcrumbsNavbar from "../breadcrumbsnav/BreadcrumbsNav";
import "./table.css";
import GlobalFilter from "./GlobalFilter";
import ExportColumn from './ExcelExcel';
// import { CSVLink } from "react-csv";

export const FilteringTable = ({ columns, data }: { columns: any; data: any; }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    // setFilter is the key!!!
    setFilter,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter, filters } = state;
  //const [AllPage, setAllPage] = useState(false);
  const tableRef = useRef(null);
  const x: any = data.map((i: any) => {
    return i;
  }
  );

  const [filteredData, setfilteredData] = useState(x);
  useEffect(() => {
    let Navfilter = filters.map((a: any) => a.value);
    setfilteredData(x);
    if (Navfilter[0] && globalFilter) {
      let p: any = x.filter((caseStatus: any) => caseStatus.caseStatus === Navfilter[0]);
      let q = search(p, globalFilter);
      setfilteredData(q);
    }
    else if (Navfilter[0] || globalFilter) {
      if (Navfilter[0]) {
        let p: any = filteredData.filter((caseStatus: any) => caseStatus.caseStatus === Navfilter[0]);
        setfilteredData(p);
      }
      else {
        let q = search(x, globalFilter);
        setfilteredData(q);
      }
    }
    else {
      setfilteredData(x);
    }

    function search(result: any, globalFilter: any) {
      globalFilter = globalFilter.toLowerCase();
      return result.filter(function (o: any) {
        return ['caseId', 'caseType', 'csuRP', 'caseStatus'].some(function (k) {
          return o[k].toString().toLowerCase().indexOf(globalFilter) !== -1;
        });
      });
    }
  }, [filters, globalFilter]);


  const csvheaders: any = [
    { label: "caseId", key: "caseId" },
    { label: "caseType", key: "caseType" },
    { label: "Email", key: "csuRP" },
    { label: "caseStatus", key: "caseStatus" }
  ];
  //const csvdata=filteredData;
  const csvReport = {
    data: filteredData,
    headers: csvheaders,
    filename: 'Asset Journal data.csv'
  };

  return (
    <>
      <BreadcrumbsNavbar filter={filters} setFilter={setFilter} />
      <div className="flex-row">
        <select name="Select">
          <option value="volvo">Add</option>
          <option value="saab">Edit</option>
          <option value="mercedes">Update</option>
        </select>
       <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        
      </div>
      <table {...getTableProps()} className="nav-filter-table" ref={tableRef}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="paginated">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FilteringTable;