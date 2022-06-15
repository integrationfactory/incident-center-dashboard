import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TableActions = () => {
  return (
    <div>
      <FaEdit size={25} />
      <FaTrashAlt size={25} />
    </div>
  );
};

export default function WithMaterialSearch() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "ID",
        field: "id",
        width: 60,
      },
      {
        label: "Action",
        field: "vulAction",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Action",
        },
      },
      {
        label: "Date",
        field: "date",
        width: 150,
      },
      {
        label: "Department",
        field: "department",
        width: 150,
      },
      {
        label: "Analyst",
        field: "analyst",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
        width: 150,
      },
      {
        label: "Tricket",
        field: "ticket",
        width: 150,
      },
      {
        label: "Actions",
        field: "action",
        width: 150,
      },
    ],
    rows: [
      {
        id: "00101",
        vulAction: "Hacking",
        date: "04/12/2022 11:50",
        department: "Engineering",
        analyst: "Luis Davila",
        status: "Done",
        ticket: "15273255",
        action: <TableActions />,
      },
      {
        id: "00102",
        vulAction: "Social",
        date: "01/12/2022 15:50",
        department: "Sales",
        analyst: "Luis Davila",
        status: "Done",
        ticket: "15273255",
        action: <TableActions />,
      },
      {
        id: "00102",
        vulAction: "Social",
        date: "01/12/2022 15:50",
        department: "Sales",
        analyst: "Luis Davila",
        status: "Done",
        ticket: "15273255",
        action: <TableActions />,
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 10, 25]}
      entries={10}
      pagesAmount={4}
      data={datatable}
      materialSearch
      theadColor="light blue"
    />
  );
}
