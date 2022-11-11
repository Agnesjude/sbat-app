import { format } from "date-fns";
import ColumnFilter from 'react-table'

export const COLUMNS = [
  {
    Header: "caseId",
    Footer: "caseId",
    accessor: "caseId",
    disableFilters: true,
    sticky: "left"
  },
  {
    Header: "caseType",
    Footer: "caseType",
    accessor: "caseType",
    sticky: "left"
  },
  {
    Header: "csuRP",
    Footer: "csuRP",
    accessor: "csuRP",
    sticky: "csuRP"
  },
  {
    Header: "caseStatus",
    Footer: "caseStatus",
    accessor: "caseStatus",
    sticky: "caseStatus"
  },
  {
    Header: "openDate",
    Footer: "openDate",
    accessor: "openDate",
    sticky: "openDate"
  }
]


export const COLUMNS1 = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left"
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    sticky: "left"
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    sticky: "left"
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value}:{value:any}) => {
      return format(new Date(value), "dd/MM/yyyy");
    }
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country"
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone"
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email"
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age"
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id"
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
      }
    ]
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth"
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country"
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
      }
    ]
  }
];
