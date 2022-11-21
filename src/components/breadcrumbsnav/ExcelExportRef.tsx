import React, { useRef } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';

//import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Test = () => {

    const tableRef = useRef(null);
    //const currentRecords :any= selectTable.getResolvedState().sortedData;
    /* Access the current field of your reactTable ref */
  
    // const rows = document.querySelectorAll('.nav-filter-table tr');
    /* Access sortedData from getResolvedState() */
  
    const rows: any = document.querySelectorAll('tr');
  
    // for (const row of rows) row.removeChild(row.firstChild);

    // ReactHTMLTableToExcel.format = (s: any, c: any) => {
    //     if (c && c['table']) {
    //         const html = c.table;
    //         const parser = new DOMParser();
    //         const doc: any = parser.parseFromString(html, 'text/html');
    //         const rows: any = doc.querySelectorAll('tr');

    //         for (const row of rows) row.removeChild(row.firstChild);

    //         c.table = doc.querySelector('table').outerHTML;
    //     }

    //     return s.replace(/{(\w+)}/g, (m: any, p: any) => c[p]);
    // };
    return (
        <div>
            <DownloadTableExcel
                filename="users table"
                sheet="users"
                currentTableRef={tableRef.current}
            >

                <button> Export excel </button>

            </DownloadTableExcel>

            <table  >
                <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Edison</td>
                        <td>Padilla</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Alberto</td>
                        <td>Lopez</td>
                        <td>94</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}


export default Test