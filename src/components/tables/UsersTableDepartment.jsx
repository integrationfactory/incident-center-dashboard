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
        
      ],
      rows: [
        {
          name: "Andres",
          email: "andres.oliva@sisap.com",
          role: "admin",
          lastTime: "Thursday, July 7, 2022, 7:25 (GTM)",
          status: "Active"
        },
      ],
    });

    const [checkbox1, setCheckbox1] = React.useState('');

    const showLogs2 = (e) => {
      setCheckbox1(e);
    };
  
  
    return (
      <MDBDataTableV5
        
        bordered
        hover
        entries={9}
        pagesAmount={4}
        displayEntries={false}
        data={datatable}
        materialSearch
        theadColor="blue"
      />
     
    );
  }