import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TableActions = () => {
  return (
    <div>
      <FaTrashAlt size={25} />
    </div>
  );
};

export default function WithMaterialSearch() {
  const [datatable, setDatatable] = React.useState({
    columns: [
        {
          label: "Name",
          field: "name",
          width: 60,
        },
        {
          label: "Email",
          field: "email",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Action",
          },
        },
        {
          label: "Role",
          field: "role",
          width: 150,
        },
        {
          label: "Status",
          field: "status",
          width: 150,
        },
        {
          label: "Last Time Connected",
          field: "lastTime",
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
          name: "Andres",
          email: "andres.oliva@sisap.com",
          role: "admin",
          lastTime: "Thursday, July 7, 2022, 7:25 (GTM)",
          status: "Active",
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
        theadColor="blue"
      />
    );
  }